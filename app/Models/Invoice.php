<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $table = 'invoices';
    protected $guarded = ['id'];
    protected $fillable = ['booking_id', 'booking_service_id', 'price', 'request_amount', 'discount', 'tax', 'sub_total', 'grand_total', 'note', 'status'];

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }

    public function bookingService()
    {
        return $this->belongsTo(BookingService::class);
    }

    public function user()
    {
        return $this->hasOneThrough(User::class, Booking::class, 'id', 'id', 'booking_id', 'user_id');
    }
}
