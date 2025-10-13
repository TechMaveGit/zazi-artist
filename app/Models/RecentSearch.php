<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RecentSearch extends Model
{
    protected $guarded = ['id'];
    protected $fillable = ['query','user_id'];

    protected $hidden = ['created_at', 'updated_at'];
}
