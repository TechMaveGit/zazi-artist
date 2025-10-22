<?php

use App\Models\Booking;
use App\Models\BookingService;
use App\Models\SlotTemplate;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('booking_service_slots', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Booking::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(BookingService::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(SlotTemplate::class)->nullable()->constrained()->nullOnDelete();
            $table->time('start_time');
            $table->time('end_time');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking_service_slots');
    }
};
