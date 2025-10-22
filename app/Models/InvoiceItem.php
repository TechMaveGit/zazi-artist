<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InvoiceItem extends Model
{
    protected $guarded = ['id'];
    protected $fillable = ['invoice_id', 'booking_service_id', 'shop_service_id', 'price', 'discount', 'total','paid_amount','remaining_amount'];

    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }

    public function bookingService()
    {
        return $this->belongsTo(BookingService::class);
    }

    public function shopService()
    {
        return $this->belongsTo(ShopService::class);
    }
}
