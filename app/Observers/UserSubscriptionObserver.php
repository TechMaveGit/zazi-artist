<?php

namespace App\Observers;

use App\Mail\SubscriptionInvoiceMail;
use App\Models\SubscriptionInvoice;
use App\Models\SubscriptionInvoiceItem;
use App\Models\UserSubscription;
use App\Models\User;
use App\Models\Subscription;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class UserSubscriptionObserver
{
    /**
     * Handle the UserSubscription "created" event.
     */
    public function created(UserSubscription $userSubscription): void
    {
        $user = $userSubscription->user;
        $plan = $userSubscription->subscription;
        $purchaseDate = $userSubscription->purchase_date;
        $expiryDate = $userSubscription->expiry_date;

        // Create a SubscriptionInvoice record for the subscription
        $subscriptionInvoice = SubscriptionInvoice::create([
            'user_id' => $user->id,
            'invoice_number' => 'INV-TEMP',
            'user_subscription_id' => $userSubscription->id, 
            'date' => $purchaseDate,
            'due_date' => $expiryDate,
            'subtotal' => $plan->price,
            'grand_total' => $plan->price,
            'paid_amount' => $plan->price, 
            'status' => 'paid',
            'note' => 'Subscription purchase invoice.',
            'is_publish' => 1,
        ]);

        $subscriptionInvoice->invoice_number = 'INV-' . str_pad($subscriptionInvoice->id, 6, '0', STR_PAD_LEFT);
        $subscriptionInvoice->save();

        SubscriptionInvoiceItem::create([
            'subscription_invoice_id' => $subscriptionInvoice->id,
            'description' => $plan->name . ' Subscription (' . ucfirst($plan->billing_period) . ')',
            'quantity' => 1,
            'price' => $plan->price,
            'total' => $plan->price,
            'paid_amount' => $plan->price,
        ]);

        Mail::to($user->email)->send(new SubscriptionInvoiceMail($subscriptionInvoice));
    }

    /**
     * Handle the UserSubscription "updated" event.
     */
    public function updated(UserSubscription $userSubscription): void
    {
        //
    }

    /**
     * Handle the UserSubscription "deleted" event.
     */
    public function deleted(UserSubscription $userSubscription): void
    {
        //
    }

    /**
     * Handle the UserSubscription "restored" event.
     */
    public function restored(UserSubscription $userSubscription): void
    {
        //
    }

    /**
     * Handle the UserSubscription "force deleted" event.
     */
    public function forceDeleted(UserSubscription $userSubscription): void
    {
        //
    }
}
