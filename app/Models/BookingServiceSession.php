<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BookingServiceSession extends Model
{
    protected $guarded = ['id'];
    protected $fillable = ['booking_service_id', 'service_session_id', 'start_date', 'start_time', 'end_date', 'end_time'];
    protected $hidden = ['created_at', 'updated_at'];

    protected $casts = [
        'before_img' => 'array',
        'after_img' => 'array',
        'healed_img' => 'array',
    ];
}
