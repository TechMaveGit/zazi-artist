<?php

use App\Http\Controllers\Api\AppointmentController;
use App\Http\Controllers\Api\ArtistController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BankAccountController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\FavoriteController;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\InvoiceController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\SessionController;
use App\Http\Controllers\Api\ShopController;
use App\Http\Controllers\Api\ShopGalleryImageController;
use App\Http\Controllers\Api\SlotController;
use App\Http\Controllers\Api\StripeController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\APi\WaitlistController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Spatie\GoogleCalendar\Event;


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
        Route::get('shop/{id}/available-slots', [ShopController::class, 'availableSlots']);
        Route::post('shop/create', [ShopController::class, 'store'])->middleware('role:salon|artist');
        Route::post('shop/{id}/edit', [ShopController::class, 'update'])->middleware('role:salon|artist');
        Route::delete('shop/{id}/delete', [ShopController::class, 'destroy'])->middleware('role:salon|artist');
        Route::post('shop/{id}/opened-closed-booking', [ShopController::class, 'openedClosedBooking'])->middleware('role:salon|artist');

        #Shop Gallery
        Route::get('gallery-images', [ShopGalleryImageController::class, 'index']);
        Route::post('gallery-images/create', [ShopGalleryImageController::class, 'store'])->middleware('role:salon|artist');
        Route::put('gallery-images/{id}/edit', [ShopGalleryImageController::class, 'update'])->middleware('role:salon|artist');
        Route::delete('gallery-images/{id}/delete', [ShopGalleryImageController::class, 'destroy'])->middleware('role:salon|artist');

        #Favorite
        Route::get('favorite', [FavoriteController::class, 'index']);
        Route::post('favorite/create', [FavoriteController::class, 'store']);
        Route::delete('favorite/{id}/delete', [FavoriteController::class, 'destroy']);

        #Service
        Route::get('service/all-categories', [ServiceController::class, 'allCategories']);
        Route::get('service', [ServiceController::class, 'index']);
        Route::get('service/{id}', [ServiceController::class, 'show']);
        Route::post('service/create', [ServiceController::class, 'store'])->middleware('role:salon|artist');
        Route::put('service/{id}/edit', [ServiceController::class, 'update'])->middleware('role:salon|artist');
        Route::delete('service/{id}/delete', [ServiceController::class, 'destroy'])->middleware('role:salon|artist');
        Route::post('service/{id}/update-status', [ServiceController::class, 'updateStatus'])->middleware('role:salon|artist');


        #Bookings
        Route::get('booking', [BookingController::class, 'index']);
        Route::get('booking/{id}', [BookingController::class, 'show']);
        Route::post('booking/create', [BookingController::class, 'store']);
        Route::post('/booking/{id}/mark-cancel', [BookingController::class, 'markCancel']);
        Route::post('/booking/{id}/mark-approve', [BookingController::class, 'markApprove'])->middleware('role:salon|artist');

        #Waitlist
        Route::get('waitlist', [WaitlistController::class, 'index']);
        Route::post('waitlist/{id}/cancel-request', [WaitlistController::class, 'cancelRequest']);

        #Review
        Route::post('reviews/create', [ReviewController::class, 'store']);

        Route::group(['middleware' => 'role:salon|artist'], function () {
            #Session
            Route::post('sessions/{id}/start', [SessionController::class, 'start']);
            Route::post('sessions/{id}/end', [SessionController::class, 'end']);

            #Customers
            Route::get('customers', [UserController::class, 'customers']);
            Route::get('customers/{id}', [UserController::class, 'customerDetails']);

            #Appointment By Salon
            Route::get('appointments', [AppointmentController::class, 'index']);
            Route::get('appointments/{id}', [AppointmentController::class, 'show']);
            Route::post('appointments/create', [AppointmentController::class, 'store']);
            Route::put('appointments/{id}/edit', [AppointmentController::class, 'update']);
            Route::post('appointments/{id}/mark-cancel', [AppointmentController::class, 'markCancel']);
            Route::post('appointments/{id}/mark-no-show', [AppointmentController::class, 'markNoShow']);

            #Bank Account
            Route::get('bank-accounts', [BankAccountController::class, 'index']);
            Route::get('bank-accounts/{id}', [BankAccountController::class, 'show']);
            Route::post('bank-accounts/create', [BankAccountController::class, 'store']);
            Route::put('bank-accounts/{id}/edit', [BankAccountController::class, 'update']);
            Route::delete('bank-accounts/{id}/delete', [BankAccountController::class, 'destroy']);

            #Shop Schedule
            Route::get('shop/{id}/schedules', [ShopController::class, 'shopSchedules']);
            Route::put('shop/{id}/update-schedule', [ShopController::class, 'updateSchedule']);

            #Invoice
            Route::get('invoice', [InvoiceController::class, 'index']);
            Route::get('invoice/{id}', [InvoiceController::class, 'show']);
            Route::post('invoice/create', [InvoiceController::class, 'store']);
            Route::put('invoice/{id}/edit', [InvoiceController::class, 'update']);

            #Customer Checkout
            Route::post('customer-checkout', [InvoiceController::class, 'customerCheckout']);

            #Slots
            Route::get('slots', [SlotController::class, 'index']);
            Route::post('slots/create', [SlotController::class, 'store']);
            Route::put('slots/{id}/edit', [SlotController::class, 'update']);
            Route::delete('slots/{id}/delete', [SlotController::class, 'destroy']);
        });

        #Stripe Controller
        Route::post('/stripe/create-payment-intent', [StripeController::class, 'create']);
        Route::post('/stripe/connect-account', [StripeController::class, 'connectAccount']);
    });
});
