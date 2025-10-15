<?php

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
        Schema::table('booking_services', function (Blueprint $table) {
            $table->enum('status', ['waitlist', 'pending', 'confirmed', 'canceled', 'in_progress', 'partial_completed', 'completed', 'reschedule'])->default('Pending')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('booking_services', function (Blueprint $table) {
            $table->enum('status', ['pending', 'confirmed', 'canceled', 'in_progress', 'partial_completed', 'completed', 'reschedule'])->default('Pending')->change();
        });
    }
};
