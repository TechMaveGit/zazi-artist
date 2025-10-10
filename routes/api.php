<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ShopController;
use App\Http\Controllers\Api\ShopGalleryImageController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['prefix' => 'v1'], function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('verify-otp', [AuthController::class, 'verifyOtp']);
    Route::post('resend-otp', [AuthController::class, 'resendOtp']);
    Route::post('forgot-password', [AuthController::class, 'forgotPassword']);
    Route::post('verify-forgot-password', [AuthController::class, 'verifyForgetPassword']);
    Route::post('reset-password', [AuthController::class, 'resetPassword']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::post('logout', [AuthController::class, 'logout']);

        #User
        Route::get('profile', [UserController::class, 'profile']);
        Route::post('profile/update', [UserController::class, 'updateProfile']);

        #Shop
        Route::get('shop', [ShopController::class, 'index']);
        Route::get('shop/{id}', [ShopController::class, 'show']);
        Route::post('shop/create', [ShopController::class, 'store']);
        Route::delete('shop/{id}', [ShopController::class, 'destroy']);

        #Shop Gallery
        Route::get('shop/gallery', [ShopGalleryImageController::class, 'index']);
        Route::post('shop/gallery/create', [ShopGalleryImageController::class, 'store']);
        Route::delete('shop/gallery/{id}', [ShopGalleryImageController::class, 'delete']);
    });
});
