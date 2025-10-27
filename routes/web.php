<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\{SubscriptionController, SalonController, TransactionController, EmailManagementController};
use App\Http\Controllers\CommonController;
use App\Http\Controllers\HomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use App\Services\GoogleCalendarService;
use Illuminate\Support\Facades\Auth;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::middleware('auth:salon')->group(function () {
    Route::get('/checkout/{id}', [HomeController::class, 'checkout'])->name('web.checkout');
    Route::get('/profile', [HomeController::class, 'profile'])->name('web.profile');
    Route::patch('/profile/update', [ProfileController::class, 'webUpdate'])->name('web.profile.update');
    Route::post('/profile/update-image', [ProfileController::class, 'webUpdatePicture'])->name('web.profile.update.picture');
});




Route::prefix('super-admin')->group(function () {
    Route::middleware(['auth', 'super_admin'])->group(function () {
        Route::get('/', function () {
            return view('dashboard');
        })->middleware(['verified'])->name('dashboard');

        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::patch('/profile/picture', [ProfileController::class, 'updatePicture'])->name('profile.picture.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
        // Subscription
        Route::resource('subscription', SubscriptionController::class);

        // Salon
        Route::resource('salon', SalonController::class);

        // Transactions
        Route::get('/transactions', [TransactionController::class, 'index'])->name('transactions.index');

        // Email Management
        Route::resource('email-management', EmailManagementController::class);

        Route::post('delete/record', [CommonController::class, 'deleteRecord'])->name('delete.record');
    });
});

Route::get('/google/auth', function (GoogleCalendarService $googleCalendarService) {
    return redirect()->away($googleCalendarService->getAuthUrl());
});

Route::get('/google/callback', function (Request $request, GoogleCalendarService $googleCalendarService) {
    $token = $googleCalendarService->handleGoogleCallback($request);
    return redirect('/')->with((['message' => 'Google Calendar connected!', 'token' => $token]));
});

Route::get('/create-event', function (GoogleCalendarService $googleCalendarService) {
    try {
        $customerEmail = 'sumit@techmavesoftware.com';
        $createdEvent = $googleCalendarService->createEvent($customerEmail);
        return response()->json(['message' => 'Event created successfully!', 'event' => $createdEvent]);
    } catch (\Throwable $th) {
        return response()->json(['message' => $th->getMessage()]);
    }
});

Route::get('/create-event-service-account', function (GoogleCalendarService $googleCalendarService) {
    $createdEvent = $googleCalendarService->createEventServiceAccount('customer@example.com');
    return response()->json($createdEvent);
});


Route::get('/mail', function () {
    $to = 'bilal@techmavesoftware.com';
    $subject = 'Test Subject DDDDDDDD';
    $body = '<p>This is a test email body.</p>';

    Mail::raw($body, function ($message) use ($to, $subject) {
        $message->to($to)
            ->subject($subject);
    });
    dd('Email sent!');
});

require __DIR__ . '/auth.php';
