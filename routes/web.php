<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\{SubscriptionController, SalonController};
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    return view('auth.login');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Subscription
    Route::get('/subscriptions', [SubscriptionController::class, 'index'])->name('subscription.list');
    Route::get('/create-subscriptions', [SubscriptionController::class, 'create'])->name('subscription.create');
    Route::get('/edit-subscriptions', [SubscriptionController::class, 'edit'])->name('subscription.edit');

    // Salon
    Route::get('/salons', [SalonController::class, 'index'])->name('salon.list');


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

require __DIR__.'/auth.php';
