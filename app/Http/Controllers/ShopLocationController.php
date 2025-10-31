<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use App\Models\ShopLocation;
use App\Models\ShopScheduled;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class ShopLocationController extends Controller
{
    public function index()
    {
        $shop = Auth::user()->shop;
        $locations = $shop->locations()->with('schedules')->get();
        return response()->json($locations);
    }

    public function show(ShopLocation $shopLocation)
    {   
        $shopLocation->load('schedules');
        return response()->json($shopLocation);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $shop = $user->shop;
        $maxLocations = $user->activeUserSubscription->subscription->max_location ?? 1;

        if ($shop->locations()->count() >= $maxLocations) {
            return response()->json(['message' => 'You have reached the maximum number of locations allowed by your subscription plan.'], 403);
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string',
            'city' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'status' => ['required', Rule::in(['active', 'inactive'])],
            'lat' => 'nullable|numeric|between:-90,90',
            'lng' => 'nullable|numeric|between:-180,180',
            'schedule' => 'required|array',
            'schedule.*.day' => ['required', Rule::in(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'])],
            'schedule.*.openTime' => 'required_unless:schedule.*.is_closed,true|date_format:H:i',
            'schedule.*.closeTime' => 'required_unless:schedule.*.is_closed,true|date_format:H:i|after:schedule.*.openTime',
            'schedule.*.is_closed' => 'boolean',
        ]);

        DB::beginTransaction();
        try {
            $location = $shop->locations()->create([
                'name' => $request->name,
                'address' => $request->address,
                'city' => $request->city,
                'phone' => $request->phone,
                'status' => $request->status,
                'lat' => $request->lat,
                'lng' => $request->lng,
            ]);

            foreach ($request->schedule as $scheduleData) {
                $location->schedules()->create([
                    'shop_id' => $shop->id,
                    'day' => $scheduleData['day'],
                    'opening_time' => $scheduleData['openTime']??'',
                    'closing_time' => $scheduleData['closeTime']??'',
                    'is_closed' => $scheduleData['is_closed'] ?? false,
                ]);
            }

            DB::commit();
            return response()->json(['message' => 'Shop location created successfully.', 'location' => $location->load('schedules')], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Failed to create shop location.', 'error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, ShopLocation $shopLocation)
    {
        $user = Auth::user();
        $shop = $user->shop;

        if ($shop->id !== $shopLocation->shop_id) {
            return response()->json(['message' => 'Unauthorized to update this location.'], 403);
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string',
            'city' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'status' => ['required', Rule::in(['active', 'inactive'])],
            'lat' => 'nullable|numeric|between:-90,90',
            'lng' => 'nullable|numeric|between:-180,180',
            'schedule' => 'required|array',
            'schedule.*.day' => ['required', Rule::in(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'])],
            'schedule.*.openTime' => 'required_unless:schedule.*.is_closed,true|date_format:H:i',
            'schedule.*.closeTime' => 'required_unless:schedule.*.is_closed,true|date_format:H:i|after:schedule.*.openTime',
            'schedule.*.is_closed' => 'boolean',
        ]);
        DB::beginTransaction();
        try {
            $shopLocation->update([
                'name' => $request->name,
                'address' => $request->address,
                'city' => $request->city,
                'phone' => $request->phone,
                'status' => $request->status,
                'lat' => $request->lat,
                'lng' => $request->lng,
            ]);

            $shopLocation->schedules()->delete();
            foreach ($request->schedule as $scheduleData) {
                $shopLocation->schedules()->create([
                    'shop_id' => $shop->id,
                    'day' => $scheduleData['day'],
                    'opening_time' => $scheduleData['openTime']??'',
                    'closing_time' => $scheduleData['closeTime']??'',
                    'is_closed' => $scheduleData['is_closed'] ?? false,
                ]);
            }

            DB::commit();
            return response()->json(['message' => 'Shop location updated successfully.', 'location' => $shopLocation->load('schedules')]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Failed to update shop location.', 'error' => $e->getMessage()], 500);
        }
    }

    public function destroy(ShopLocation $shopLocation)
    {
        $user = Auth::user();
        $shop = $user->shop;

        if ($shop->id !== $shopLocation->shop_id) {
            return response()->json(['message' => 'Unauthorized to delete this location.'], 403);
        }

        DB::beginTransaction();
        try {
            $shopLocation->schedules()->delete();
            $shopLocation->delete();
            DB::commit();
            return response()->json(['message' => 'Shop location deleted successfully.']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Failed to delete shop location.', 'error' => $e->getMessage()], 500);
        }
    }
}
