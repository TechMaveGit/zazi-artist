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
        'banner_img',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
    ];

    protected $appends = [
        'banner_img_url',
        'ratings',
        'distance'
    ];

    public function services()
    {
        return $this->hasMany(ShopService::class);
    }

    public function galleryImages()
    {
        return $this->hasMany(ShopGalleryImage::class);
    }

    public function scheduled()
    {
        return $this->hasMany(ShopScheduled::class);
    }

    public function artists(){
        return $this->hasOne(User::class,'id','shop_id');
    }

    public function getBannerImgUrlAttribute()
    {
        $images = is_string($this->banner_img)
            ? explode(',', $this->banner_img)
            : ($this->banner_img ?? []);

        $urls = array_map(fn($each) => asset('storage/' . ltrim($each, '/')), $images);

        return count($urls) === 1 ? $urls[0] : $urls;
    }

    public function getRatingsAttribute()
    {
        return 3.5;
    }

    public function getDistanceAttribute()
    {
        $user_lat = request()->lat ?? 28.630130116504127;
        $user_lng = request()->lng ?? 77.3806560103913;
        if ($this->lat && $this->lng) {
            $distance = calculateDistance(
                (float)$user_lat,
                (float)$user_lng,
                (float)$this->lat,
                (float)$this->lng,
                'km'
            );
            return $distance . ' km';
        } else {
            return null;
        }
    }
}
