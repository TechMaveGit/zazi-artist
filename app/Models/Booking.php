<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Booking extends Model
{   
    use SoftDeletes;
    protected $guarded = ['id'];
    protected $fillable = ['booking_id','shop_id', 'user_id','booking_amount','pay_later_amount','total_amount','is_date_flexible', 'is_time_flexible', 'start_date', 'start_time', 'end_date', 'end_time', 'status','reason'];

    protected $hidden=['created_at', 'updated_at'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }

    

    public function bookingServices()
    {
        return $this->hasMany(BookingService::class);
    }
}
