<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    protected $fillable = [
        'name',
        'price',
        'description',
        'type',
        'billing_period',
        'max_location',
        'max_artists',
        'is_popular',
        'is_active',
        'features',
    ];

    protected $casts = [
        'features' => 'array',
        'is_popular' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function userSubscriptions()
    {
        return $this->hasMany(UserSubscription::class, 'subscription_id');
    }
}
