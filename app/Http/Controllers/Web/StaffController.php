<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\ServiceCategory;
use App\Models\ShopLocation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class StaffController extends Controller
{
    public function index()
    {
        $shop = Auth::user()->shop;
        $artists = User::where('type', 'artist')
            ->whereHas('shop', function ($query) use ($shop) {
                $query->where('id', $shop->id);
            })
            ->with('staffSchedules.shopLocation')
            ->get();

        $serviceCategorys = ServiceCategory::all();
        $shopLocations = $shop->locations;

        return view('web.profile.artists', compact('artists', 'serviceCategorys', 'shopLocations'));
    }

    public function store(Request $request)
    {
        $shop = Auth::user()->shop;

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'required|string|max:20|unique:users',
            'about' => 'nullable|string',
            'categories' => 'required|array',
            'categories.*' => 'exists:categories,id',
            'profile_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg',
            'schedule' => 'required|array',
            'schedule.*.location_id' => ['required', 'exists:shop_locations,id', Rule::in($shop->locations->pluck('id')->toArray())],
            'schedule.*.working_days' => 'required|array|min:1',
            'schedule.*.working_days.*' => 'in:sun,mon,tue,wed,thu,fri,sat',
        ], [
            'schedule.*.location_id.required' => 'The location field is required.',
            'schedule.*.working_days.required' => 'The working days field is required.',
        ]);

        DB::beginTransaction();
        try {
            $artist = User::create([
                'shop_id' => $shop->id,
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'about' => $request->about,
                'type' => 'staff',
                'password' => Hash::make('123456'),
                'categories' => $request->categories,
                'email_verified_at' => now(),
            ]);
            $artist->assignRole('staff');

            if ($request->hasFile('profile_image')) {
                $path = $request->file('profile_image')->store('profile', 'public');
                $artist->profile = $path;
                $artist->save();
            }


            foreach ($request->schedule as $scheduleData) {
                $artist->staffSchedules()->create([
                    'shop_location_id' => $scheduleData['location_id'],
                    'working_days' => $scheduleData['working_days'],
                ]);
            }

            DB::commit();
            return response()->json(['message' => 'Artist added successfully.']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Failed to add artist: ' . $e->getMessage()], 500);
        }
    }

    public function edit(User $staff)
    {
        $shop = Auth::user()->shop;
        if (!$shop->artists->contains($staff->id)) {
            return response()->json(['message' => 'Artist not found or not associated with your shop.'], 404);
        }
        $staff->load('staffSchedules.shopLocation');
        return response()->json($staff);
    }

    public function update(Request $request, User $staff)
    {
        $shop = Auth::user()->shop;

        if (!$shop->artists->contains($staff->id)) {
            return response()->json(['message' => 'Artist not found or not associated with your shop.'], 404);
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($staff->id)],
            'phone' => ['required', 'string', 'max:20', Rule::unique('users')->ignore($staff->id)],
            'abount' => 'nullable|string',
            'categories' => 'nullable|array',
            'categories.*' => 'exists:categories,id',
            'profile_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg',
            'schedule' => 'required|array',
            'schedule.*.location_id' => ['required', 'exists:shop_locations,id', Rule::in($shop->locations->pluck('id')->toArray())],
            'schedule.*.working_days' => 'required|array|min:1',
            'schedule.*.working_days.*' => 'in:sun,mon,tue,wed,thu,fri,sat',
        ]);

        DB::beginTransaction();
        try {
            $staff->update([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'about' => $request->about,
                'categories' => $request->categories,
            ]);

            if ($request->hasFile('profile_image')) {
                if ($staff->profile) {
                    Storage::disk('public')->delete($staff->profile);
                }
                $path = $request->file('profile_image')->store('profile', 'public');
                $staff->profile = $path;
                $staff->save();
            } elseif ($request->input('remove_profile_image')) {
                if ($staff->profile) {
                    Storage::disk('public')->delete($staff->profile);
                    $staff->profile = null;
                    $staff->save();
                }
            }

            // Sync staff schedules
            $existingSchedules = $staff->staffSchedules()->get()->keyBy('shop_location_id');
            $updatedScheduleIds = [];

            foreach ($request->schedule as $scheduleData) {
                $locationId = $scheduleData['location_id'];
                $workingDays = $scheduleData['working_days'];

                // If schedule already exists for this location, update it
                if (isset($existingSchedules[$locationId])) {
                    $existingSchedules[$locationId]->update([
                        'working_days' => $workingDays,
                    ]);
                    $updatedScheduleIds[] = $existingSchedules[$locationId]->id;
                } else {
                    // Otherwise, create a new one
                    $newSchedule = $staff->staffSchedules()->create([
                        'shop_location_id' => $locationId,
                        'working_days' => $workingDays,
                    ]);
                    $updatedScheduleIds[] = $newSchedule->id;
                }
            }

            // Delete old schedules not included in current request
            $staff->staffSchedules()
                ->whereNotIn('id', $updatedScheduleIds)
                ->delete();

            DB::commit();
            return response()->json(['message' => 'Artist updated successfully.']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Failed to update artist: ' . $e->getMessage()], 500);
        }
    }

    public function destroy(User $staff)
    {
        $shop = Auth::user()->shop;

        if ($staff->type !== 'artist' || !$shop->artists->contains($staff->id)) {
            return response()->json(['message' => 'Artist not found or not associated with your shop.'], 404);
        }

        DB::beginTransaction();
        try {
            if ($staff->profile) {
                Storage::disk('public')->delete($staff->profile);
            }
            $staff->staffSchedules()->delete();
            $staff->delete();

            DB::commit();
            return response()->json(['message' => 'Artist deleted successfully.']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Failed to delete artist: ' . $e->getMessage()], 500);
        }
    }
}
