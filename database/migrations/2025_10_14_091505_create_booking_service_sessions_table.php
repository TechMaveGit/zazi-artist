<?php

use App\Models\BookingService;
use App\Models\BookingServiceSession;
use App\Models\ServiceSession;
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
        Schema::create('booking_service_sessions', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(BookingService::class)->constrained()->onDelete('cascade'); 
            $table->foreignIdFor(ServiceSession::class)->constrained()->onNull('cascade');
            $table->date('start_date')->nullable();
            $table->time('start_time')->nullable();
            $table->date('end_date')->nullable();
            $table->time('end_time')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('booking_service_sessions');
    }
};
