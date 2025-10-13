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
    ];

    public function getBannerImgUrlAttribute()
    {
        $images = is_string($this->banner_img)
            ? explode(',', $this->banner_img)
            : ($this->banner_img ?? []);

        $urls = array_map(fn($each) => asset('storage/' . ltrim($each, '/')), $images);

        return count($urls) === 1 ? $urls[0] : $urls;
    }

    public function galleryImages()
    {
        return $this->hasMany(ShopGalleryImage::class);
    }

    public function scheduled()
    {
        return $this->hasMany(ShopScheduled::class);
    }
}
