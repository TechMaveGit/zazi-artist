<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    protected $casts = [
        'banner_img' => 'array',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
