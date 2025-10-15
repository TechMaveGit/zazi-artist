<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BookingService extends Model
{
    protected $guarded = ['id'];
    protected $fillable = ['booking_id', 'service_id', 'session_id', 'booking_amount', 'pay_later_amount', 'total_amount', 'status', 'is_consent_form'];
    protected $hidden = ['created_at', 'updated_at'];

    protected $appends = [
        'session_count',
        'total_duration',
    ];

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

    public function getSessionCountAttribute()
    {
        return $this->bookingServiceSessions()->count();
    }

    public function getTotalDurationAttribute()
    {
        $totalMinutes = $this->bookingServiceSessions()
            ->get()
            ->sum(function ($session) {
                $start = \Carbon\Carbon::parse($session->start_time);
                $end = \Carbon\Carbon::parse($session->end_time);
                return $end->diffInMinutes($start);
            });

        $hours = intdiv($totalMinutes, 60);
        $minutes = $totalMinutes % 60;

        if ($hours > 0 && $minutes > 0) {
            return "{$hours} hrs {$minutes} mins";
        } elseif ($hours > 0) {
            return "{$hours} hrs";
        } else {
            return "{$minutes} mins";
        }
    }
}
