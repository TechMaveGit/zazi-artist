<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class OrderStatusNotification extends Notification implements ShouldQueue
{
    use Queueable;

    protected $order;
    protected $status;

    /**
     * Create a new notification instance.
     */
    public function __construct($order, $status)
    {
        $this->order = $order;
        $this->status = $status;
    }

    /**
     * Get the notification's delivery channels.
     */
    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail($notifiable)
    {
        $subject = "Your order #{$this->order->order_id} has been {$this->status}";
        $line = match ($this->status) {
            'waitlist'  => "Your order has been added to the waitlist,We will get back to you soon.",
            'created'   => "Your order has been placed successfully!,Please wait for confirmation.",
            'approved'  => "Good news! Your order has been approved.",
            'rejected'  => "Sorry, your order has been rejected.",
            'cancelled' => "Your order has been cancelled.",
            default     => "Order status updated.",
        };

        return (new MailMessage)
            ->subject($subject)
            ->greeting("Hello {$notifiable->name},")
            ->line($line)
            ->line('Thank you for shopping with us!');
    }

    /**
     * Store notification in the database.
     */
    public function toDatabase($notifiable)
    {
        return [
            'order_id' => $this->order->id,
            'status' => $this->status,
            'message' => "Your order #{$this->order->order_id} has been {$this->status}.",
        ];
    }
}
