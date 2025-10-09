<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class WelcomeUserNotification extends Notification
{
    use Queueable;

    public function __construct(public $user)
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
            ->greeting("Hello {$this->user->name},")
            ->line('Thank you for registering with us!')
            ->line('We are excited to have you onboard.');
    }

    public function toArray($notifiable)
    {
        return [
            'message' => "Welcome {$this->user->name} to Salon & Tattoo App!",
            'user_id' => $this->user->id,
        ];
    }
}
