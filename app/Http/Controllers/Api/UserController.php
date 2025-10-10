<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateProfileRequest;
use App\Traits\ApiResponse;
use App\Traits\UploadFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    use ApiResponse, UploadFile;
    public function profile(Request $request)
    {
        return ApiResponse::success("User profile", 200, [
            'user' => $request->user()
        ]);
    }

    public function updateProfile(UpdateProfileRequest $request)
    {   
        DB::beginTransaction();
        try {
            $user = $request->user();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->phone = $request->phone;
            $user->about = $request->about;
            $user->categories = $request->categories;
            $user->location = $request->location;

            if ($request->hasFile('profile')) {
                $user->profile = UploadFile::uploadFile($request->file('profile'), 'profile');
            }
            $user->save();
            return ApiResponse::success("User profile updated", 200, [
                'user' => $user
            ]);
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return ApiResponse::error("Something went wrong", 500, $th->getMessage());
        }
    }
}
