<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class ShopScheduled extends Model
{
    protected $guarded = ['id'];
    protected $fillable = ['shop_id', 'day', 'opening_time', 'closing_time','is_closed','additional_hours'];
    protected $casts = [
        'additional_hours' => 'array',
    ];

    protected $appends = ['date'];
    public function getDateAttribute()
    {
        // 1. Get the start date of the current week (e.g., Sunday)
        $startDate = Carbon::now()->startOfWeek(Carbon::SUNDAY);
        // 2. Determine the number of days to add based on the current day's name.
        $dayIndex = array_search(strtolower($this->day), [
            'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'
        ]);
        // 3. Calculate the specific date for the current week.
        $date = $startDate->copy()->addDays($dayIndex);
        // 4. Return the date in your desired format (e.g., Sun, 25 October)
        return $date->format('D, d F');
    }
}
