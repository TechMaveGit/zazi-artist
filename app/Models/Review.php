<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $guarded = ['id'];
    protected $fillable = ['shop_id', 'booking_id', 'service_rating', 'hygiene_rating', 'ambience_rating', 'total_rating', 'comment', 'user_id'];

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }
}
