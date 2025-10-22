<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\{SubscriptionController, SalonController, TransactionController, EmailManagementController};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;


// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    return view('auth.login');
});

use App\Services\GoogleCalendarService;

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



Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Subscription
    Route::resource('subscription', SubscriptionController::class);

    // Salon
    Route::resource('salon', SalonController::class);

    // Transactions
    Route::get('/transactions', [TransactionController::class, 'index'])->name('transactions.index');

    // Email Management
    Route::resource('email-management', EmailManagementController::class);
});




Route::get('/mail', function () {
    $to = 'bilal@techmavesoftware.com'; // Replace with the recipient's email address
    $subject = 'Test Subject DDDDDDDD';
    $body = '<p>This is a test email body.</p>';

    Mail::raw($body, function ($message) use ($to, $subject) {
        $message->to($to)
            ->subject($subject);
    });
    dd('Email sent!');
});

require __DIR__ . '/auth.php';
