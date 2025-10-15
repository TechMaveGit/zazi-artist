<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BookingService extends Model
{
    protected $guarded = ['id'];
    protected $fillable = ['booking_id', 'service_id', 'session_id', 'booking_amount', 'pay_later_amount', 'total_amount', 'status','is_consent_form'];
    protected $hidden = ['created_at', 'updated_at'];

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }

    public function service()
    {
        return $this->belongsTo(ShopService::class);
    }

    public function bookingServiceSessions()
    {
        return $this->hasMany(BookingServiceSession::class);
    }
}
