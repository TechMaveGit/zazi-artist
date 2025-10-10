<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Traits\ApiResponse;
use Illuminate\Auth\Events\Login;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

class AuthController extends Controller
{
    use ApiResponse;
    public function register(Request $request)
    {

        $request->validate([
            'type' => 'required|in:customer,artist,salon',
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'phone_code' => 'required',
            'phone' => 'required|min_digits:10|max_digits:10',
            'password' => 'required|min:6',
            'confirm_password' => 'required|same:password',
            'gender' => 'required|in:male,female',
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
            return ApiResponse::success("Registration successfully", 200, ['token' => $token, 'user' => $user]);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function login(Request $request)
    {

        $request->validate([
            'mobile' => 'required_if:type,mobile',
            'email' => 'required_if:type,email|exists:users,email',
            'password' => 'required_if:type,email',
        ], [
            'email.exists' => 'Email does not exist',
        ]);

        try {
            if ($request->type == 'email') {
                $user = User::where('email', $request->email)->first();

                if (!$user) {
                    return ApiResponse::error("Invalid credentials", 401);
                }

                if (!Hash::check($request->password, $user->password)) {
                    return ApiResponse::error("Invalid credentials", 401);
                }

                if (!$user->hasVerifiedEmail()) {
                    return ApiResponse::error("Email not verified", 401);
                }

                // Generate API token
                $token = $user->createToken('API Token')->plainTextToken;

                return ApiResponse::success("Login successfully", 200, [
                    'token' => $token,
                    'user' => $user
                ]);
            } else {
                $user = User::where('phone', $request->mobile)->first();

                if (!$user) {
                    return ApiResponse::error("Invalid credentials", 401);
                }
                $user->sendOtp();
                return ApiResponse::success("OTP sent successfully", 200, [
                    'user' => $user
                ]);
            }
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function verifyOtp(Request $request)
    {
        $request->validate([
            'mobile' => 'required|exists:users,phone',
            'otp' => 'required',
        ]);

        try {
            $user = User::where('phone', $request->mobile)->first();
            if ($user->otp == $request->otp) {
                if ($user->otp_expires_at < now()) {
                    return ApiResponse::error("OTP expired", 401);
                }
                $user->otp = null;
                $user->save();
                return ApiResponse::success("OTP verified successfully", 200, [
                    'token' => $user->createToken('API Token')->plainTextToken,
                    'user' => $user
                ]);
            } else {
                return ApiResponse::error("Invalid OTP", 401);
            }
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function resendOtp(Request $request)
    {
        $request->validate([
            'type' => 'required|in:email,mobile',
            'mobile' => 'required_if:type,mobile|exists:users,phone',
            'email' => 'required_if:type,email|exists:users,email',
        ]);


        try {
            $user = User::where(function ($q) use ($request) {
                if ($request->type == 'email') $q->where('email', $request->email);
                if ($request->type == 'mobile') $q->where('phone', $request->mobile);
            })->firstOrFail();

            $user->sendOtp($request->type);
            return ApiResponse::success("OTP resent successfully", 200, [
                'user' => $user
            ]);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function forgotPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users,email',
        ], [
            'email.exists' => 'Email does not exist',
        ]);

        try {
            $user = User::where('email', $request->email)->first();
            $user->sendForgetPasswordMail();
            return ApiResponse::success("OTP sent successfully", 200, [
                'user' => $user
            ]);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function verifyForgetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|exists:users,email',
            'otp' => 'required',
        ]);

        try {
            $user = User::where('email', $request->email)->first();
            if ($user->otp == $request->otp) {
                if ($user->otp_expires_at < now()) {
                    return ApiResponse::error("OTP expired", 401);
                }
                $user->otp = null;
                $user->save();
                return ApiResponse::success("OTP verified successfully", 200, ['user' => $user]);
            } else {
                return ApiResponse::error("Invalid OTP", 401);
            }
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|exists:users,email',
            'password' => 'required|min:6',
            'confirm_password' => 'required|same:password',
        ], [
            'email.exists' => 'Email does not exist',
        ]);

        try {
            $user = User::find($request->user_id);
            if ($user->otp == $request->otp) {
                if ($user->otp_expires_at < now()) {
                    return ApiResponse::error("OTP expired", 401);
                }
                $user->otp = null;
                $user->password = Hash::make($request->password);
                $user->save();
                return ApiResponse::success("Password reset successfully", 200, [
                    'user' => $user
                ]);
            } else {
                return ApiResponse::error("Invalid OTP", 401);
            }
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }

    public function logout(Request $request)
    {
        try {
            $user = $request->user();
            if ($user) {
                $user->tokens()->delete();
                return ApiResponse::success("Logout successfully", 200);
            }

            return ApiResponse::success("Already logged out", 200);
        } catch (\Throwable $th) {
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }
}
