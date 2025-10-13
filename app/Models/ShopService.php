<?php

namespace App\Models;

use App\Traits\UploadFile;
use Illuminate\Database\Eloquent\Model;

class ShopService extends Model
{   
    use UploadFile;
    protected $guarded = ['id'];
    protected $fillable = ['shop_id', 'category_id', 'name', 'description', 'service_duration', 'service_price', 'booking_price', 'cover_img', 'status', 'sessions'];
    // protected $hidden = ['created_at', 'updated_at'];
    protected $appends = ['cover_img_url'];

    public function serviceSessions()
    {
        return $this->hasMany(ServiceSession::class, 'service_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getCoverImgUrlAttribute()
    {
        return $this->cover_img ? UploadFile::getFileUrl($this->cover_img) : null;
    }
}
