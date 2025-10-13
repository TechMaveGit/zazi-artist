<?php

use App\Http\Controllers\Api\ArtistController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BankAccountController;
use App\Http\Controllers\Api\FavoriteController;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\ServiceController;
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

        #Home Page
        Route::get('home', [HomeController::class, 'index']);
        Route::get('artists', [HomeController::class, 'artists']);
        Route::get('customers', [HomeController::class, 'customers']);
        Route::get('global-search', [HomeController::class, 'globalSearch']);

        #User
        Route::get('profile', [UserController::class, 'profile']);
        Route::put('profile/update', [UserController::class, 'updateProfile']);

        #Shop
        Route::get('shop', [ShopController::class, 'index']);
        Route::get('shop/{id}', [ShopController::class, 'show']);
        Route::post('shop/create', [ShopController::class, 'store']);
        Route::post('shop/{id}/edit', [ShopController::class, 'update']);
        Route::delete('shop/{id}/delete', [ShopController::class, 'destroy']);

        #Shop Gallery
        Route::get('gallery-images', [ShopGalleryImageController::class, 'index']);
        Route::post('gallery-images/create', [ShopGalleryImageController::class, 'store']);
        Route::put('gallery-images/{id}/edit', [ShopGalleryImageController::class, 'update']);
        Route::delete('gallery-images/{id}/delete', [ShopGalleryImageController::class, 'destroy']);

        #Favorite
        Route::get('favorite', [FavoriteController::class, 'index']);
        Route::post('favorite/create', [FavoriteController::class, 'store']);
        Route::delete('favorite/{id}/delete', [FavoriteController::class, 'destroy']);

        #Service
        Route::get('service/all-categories', [ServiceController::class, 'allCategories']);
        Route::get('service', [ServiceController::class, 'index']);
        Route::get('service/{id}', [ServiceController::class, 'show']);
        Route::post('service/create', [ServiceController::class, 'store']);
        Route::put('service/{id}/edit', [ServiceController::class, 'update']);
        Route::delete('service/{id}/delete', [ServiceController::class, 'destroy']);
        Route::post('service/{id}/update-status', [ServiceController::class, 'updateStatus']);

        #Bank Account
        Route::get('bank-accounts', [BankAccountController::class, 'index']);
        Route::get('bank-accounts/{id}', [BankAccountController::class, 'show']);
        Route::post('bank-accounts/create', [BankAccountController::class, 'store']);
        Route::put('bank-accounts/{id}/edit', [BankAccountController::class, 'update']);
        Route::delete('bank-accounts/{id}/delete', [BankAccountController::class, 'destroy']);

    });
});
