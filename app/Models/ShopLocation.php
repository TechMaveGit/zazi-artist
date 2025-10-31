<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShopLocation extends Model
{
    use HasFactory;

    protected $fillable = [
        'shop_id',
        'name',
        'address',
        'city',
        'phone',
        'status',
        'lat',
        'lng',
    ];

    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }

    public function schedules()
    {
        return $this->hasMany(ShopScheduled::class);
    }
}
