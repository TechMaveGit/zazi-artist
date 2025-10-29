<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionInvoice extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'user_subscription_id',
        'invoice_number',
        'subtotal',
        'discount',
        'tax',
        'grand_total',
        'paid_amount',
        'remaining_amount',
        'status',
        'note',
        'is_publish',
        'date',
        'due_date',
    ];

    protected $casts = [
        'date' => 'date',
        'due_date' => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function userSubscription()
    {
        return $this->belongsTo(UserSubscription::class);
    }

    public function items()
    {
        return $this->hasMany(SubscriptionInvoiceItem::class);
    }
}
