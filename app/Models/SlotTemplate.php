<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SlotTemplate extends Model
{
    protected $table = 'slot_templates';

    protected $guarded = ['id'];
    protected $fillable = ['shop_id', 'date', 'start_time', 'end_time', 'capacity', 'status'];

    protected $hidden = ['created_at', 'updated_at'];

    protected $appends = ['remaining_slots'];

    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }

    public function bookingServiceSlots()
    {
        return $this->hasMany(BookingServiceSlot::class);
    }

    public function getRemainingSlotsAttribute()
    {
        return $this->capacity - $this->bookingServiceSlots()->count();
    }
}
