<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmailTemplate extends Model
{   
    protected $guarded = ['id'];
    protected $fillable = [
        'name',
        'type',
        'subject',
        'content',
        'status',
    ];
}
