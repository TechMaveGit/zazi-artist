<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Traits\ApiResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User; // Import the User model
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\WebProfileUpdateRequest;
use Illuminate\View\View;

class ProfileController extends Controller
{
    use ApiResponse;
    
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): View
    {
        return view('profile.edit', [
            'user' => $request->user(),
        ]);
    }

    /**
     * Update the user's profile information from the web interface.
     */
    public function webUpdate(WebProfileUpdateRequest $request)
    {
        try {
            /** @var \App\Models\User $user */
            $user = Auth::guard('salon')->user();
            if (!$user) {
                return ApiResponse::error('User not authenticated.', 401);
            }

            $user->name = $request->fullName;
            $user->phone = $request->phone;
            $user->about = $request->bio; // Assuming 'about' field for bio
            $user->save();

            // Update or create user address
            $user->address()->updateOrCreate(
                ['user_id' => $user->id],
                [
                    'address_line1' => $request->address1,
                    'address_line1' => $request->address2,
                    'city' => $request->city,
                    'state' => $request->state,
                    'postal_code' => $request->zipCode,
                ]
            );

            return ApiResponse::success('Profile updated successfully.', 200);
        } catch (\Exception $e) {
            return ApiResponse::error('Failed to update profile. Please try again.', 500, $e->getMessage());
        }
    }

    /**
     * Update the user's profile picture from the web interface.
     */
    public function webUpdatePicture(Request $request)
    {
        if ($request->has('image')) {
            /** @var \App\Models\User $user */
            $user = Auth::guard('salon')->user();
            if (!$user) {
                return ApiResponse::error('User not authenticated.', 401);
            }

            $imageData = $request->input('image');

            list($type, $imageData) = explode(';', $imageData);
            list(, $imageData)      = explode(',', $imageData);
            $imageData = base64_decode($imageData);
            $fileName = 'profile_' . $user->id . '_' . time() . '.png';
            $filePath = 'profile/' . $fileName;
            Storage::disk('public')->put($filePath, $imageData);
            $user->profile = $filePath; // Corrected to 'profile' field
            $user->save();

            return ApiResponse::success('Profile picture updated successfully!', 200, ['path' => Storage::url($filePath)]);
        }
        return ApiResponse::error('No image data provided.', 400);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request)
    {
        try {
            $fullNumber = preg_replace('/\D/', '', $request->phone_full); 
            $phone = preg_replace('/\D/', '', $request->phone); 
            $dial_code = str_replace($phone, '', $fullNumber);
            $user = $request->user();
            $user->name = $request->name;
            $user->phone = $request->phone;
            $user->phone_code = '+' . $dial_code;
            $user->save();

            // Update or create user address
            $addressData = $request->only([
                'address_line1',
                'address_line2',
                'city',
                'state',
                'postal_code',
                'country',
            ]);

            $user->address()->updateOrCreate(
                ['user_id' => $user->id],
                $addressData
            );

            return ApiResponse::success('Profile updated successfully.', 200);
        } catch (\Exception $e) {
            return ApiResponse::error('Failed to update profile. Please try again.', 500, $e->getMessage());
        }
    }

    public function updatePicture(Request $request)
    {
        if ($request->has('image')) {
            $user = $request->user();
            $imageData = $request->input('image');

            list($type, $imageData) = explode(';', $imageData);
            list(, $imageData)      = explode(',', $imageData);
            $imageData = base64_decode($imageData);
            $fileName = 'profile_' . $user->id . '_' . time() . '.png';
            $filePath = 'profile/' . $fileName;
            Storage::disk('public')->put($filePath, $imageData);
            $user->profile = $filePath;
            $user->save();

            return response()->json(['message' => 'Profile picture updated successfully!', 'path' => $filePath]);
        }
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validateWithBag('userDeletion', [
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
