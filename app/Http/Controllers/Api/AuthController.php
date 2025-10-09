<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    use ApiResponse;
    public function register(Request $request)
    {

        $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'phone_code' => 'required',
            'phone' => 'required|min_digits:10|max_digits:10',
            'password' => 'required|min:6',
            'confirm_password' => 'required|same:password',
            'gender' => 'required|in:male,female',
            'type' => 'required|in:customer,artist,professional',
        ], [
            'phone.min_digits' => 'Phone number must be 10 digits',
            'phone.max_digits' => 'Phone number must be 10 digits',
        ]);

        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone_code' => $request->phone_code,
                'phone' => $request->phone,
                'password' => bcrypt($request->password),
                'gender' => $request->gender,
                'type' => $request->type,
                'email_verified_at' => now(),
            ]);
            $user->assignRole($request->type);
            $token = $user->createToken('API Token')->plainTextToken; 
            return ApiResponse::success("Registration successfully", 200, ['token' => $token,'user' => $user]); 

        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }
}
