<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Traits\ApiResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
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
