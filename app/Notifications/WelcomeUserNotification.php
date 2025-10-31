<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class WelcomeUserNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct(public $user, public $password)
    {
    }

    public function via($notifiable)
    {
        return ['mail', 'database']; // send via email and store in DB
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Welcome to Salon & Tattoo App')
            ->view('emails.welcome', [
                'user' => $this->user,
                'password' => $this->password,
            ]);
    }

    public function toArray($notifiable)
    {
        return [
            'message' => "Welcome {$this->user->name} to Salon & Tattoo App!",
            'user_id' => $this->user->id,
        ];
    }
}