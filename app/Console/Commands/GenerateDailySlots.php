<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Shop;
use App\Models\ShopScheduled;
use App\Models\Slot;
use App\Models\SlotTemplate;
use Carbon\Carbon;

class GenerateDailySlots extends Command
{
    protected $signature = 'slots:generate';
    protected $description = 'Generate 30-min slots for shops daily for next day';

    public function handle()
    {
        $tomorrow = Carbon::tomorrow()->toDateString();
        $tommorrow_day = date('l', strtotime($tomorrow));


        $shops = Shop::all();
        foreach ($shops as $shop) {

            // Check if shop is open
            $tommorrowSchedule = ShopScheduled::where('shop_id', $shop->id)->where('day', $tommorrow_day)->first();
            if (!$tommorrowSchedule || $tommorrowSchedule->is_closed) {
                $this->info("Shop {$shop->name} is closed on {$tomorrow}, skipping.");
                continue;
            }

            $exists = SlotTemplate::where('shop_id', $shop->id)
                ->where('date', $tomorrow)
                ->exists();

            if ($exists) {
                $this->info("Slots already created for {$shop->name} on {$tomorrow}, skipping.");
                continue;
            }

            // Generate slots
            $this->generateSlotsForShop($shop, $tomorrow, $tommorrowSchedule);
            $this->info("Slots created for {$shop->name} on {$tomorrow}");
        }
    }

    protected function generateSlotsForShop($shop, $date, $schedule)
    {
        $slotDuration = 30;
        $capacity = 2;

        $start = Carbon::parse($schedule->opening_time);
        $end = Carbon::parse($schedule->closing_time);
        if ($end->lessThan($start)) {
            $end->addHours(12);
        }
        while ($start->addMinutes($slotDuration)->lte($end)) {
            $slotStart = $start->copy()->subMinutes($slotDuration)->format('H:i');
            $slotEnd   = $start->format('H:i');
            SlotTemplate::create([
                'shop_id' => $shop->id,
                'date' => $date,
                'start_time' => $slotStart,
                'end_time' => $slotEnd,
                'capacity' => $capacity,
            ]);
        }
    }
}
