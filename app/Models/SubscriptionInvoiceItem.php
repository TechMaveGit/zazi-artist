<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionInvoiceItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'subscription_invoice_id',
        'description',
        'quantity',
        'price',
        'discount',
        'total',
        'paid_amount',
    ];

    public function subscriptionInvoice()
    {
        return $this->belongsTo(SubscriptionInvoice::class);
    }
}
