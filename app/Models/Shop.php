<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    protected $guarded = ['id'];
    protected $fillable = [
        'user_id',
        'name',
        'email',
        'dial_code',
        'phone',
        'address',
        'lat',
        'lng',
        'country',
        'state',
        'city',
        'city',
        'zipcode',
        'description',
        'banner_img',
    ];
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
        'distance',
        'is_shop_opened',
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

    public function artists()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function owner()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function userSubscription()
    {
        return $this->hasOne(UserSubscription::class, 'shop_id', 'id');
    }

    public function locations()
    {
        return $this->hasMany(ShopLocation::class);
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
        return Review::where('shop_id', $this->id)->avg('total_rating');
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

    public function getIsShopOpenedAttribute()
    {
        $todaySchedule = ShopScheduled::where('shop_id', $this->id)->where('day', date('l'))->first();
        if (!$todaySchedule) {
            return false;
        }
        if ($todaySchedule->is_closed) {
            return false;
        }

        $now = Carbon::now('Asia/Kolkata');

        // Main hours
        $mainOpen = $this->parseTime($todaySchedule->opening_time);
        $mainClose = $this->parseTime($todaySchedule->closing_time);

        // Additional hours
        $additionalHours = is_array($todaySchedule->additional_hours)
            ? $todaySchedule->additional_hours
            : json_decode($todaySchedule->additional_hours, true);

        $addOpen = $addClose = null;
        if (!empty($additionalHours['opening_time']) && !empty($additionalHours['closing_time'])) {
            $addOpen = $this->parseTime($additionalHours['opening_time']);
            $addClose = $this->parseTime($additionalHours['closing_time']);
        }

        // Adjust if closing time < opening (overnight hours)
        if ($mainClose && $mainOpen && $mainClose->lessThan($mainOpen)) {
            $mainClose->addHours(12);
        }
        if ($addClose && $addOpen && $addClose->lessThan($addOpen)) {
            $addClose->addHours(12);
        }
        $inMainHours = ($mainOpen && $mainClose && $now->between($mainOpen, $mainClose));
        $inAdditionalHours = ($addOpen && $addClose && $now->between($addOpen, $addClose));

        return $inMainHours || $inAdditionalHours;
    }

    protected function parseTime($time)
    {
        $formats = ['H:i', 'H:i:s', 'g:i A', 'h:i A'];
        foreach ($formats as $format) {
            try {
                return Carbon::createFromFormat($format, trim($time), 'Asia/Kolkata')
                    ->setTimezone('Asia/Kolkata')
                    ->setDateFrom(Carbon::now('Asia/Kolkata'));
            } catch (\Exception $e) {
                // try next format
            }
        }
        return null;
    }

    // Get available slots
    public function availableSlots($date)
    {
        $date = Carbon::parse($date);
        $slots = SlotTemplate::where('shop_id', $this->id)->where('date', $date->format('Y-m-d'))->get();
        return $slots;
    }
}
