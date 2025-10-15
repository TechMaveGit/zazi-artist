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
        Schema::table('bookings', function (Blueprint $table) {
            $table->enum('status', ['waitlist', 'pending', 'confirmed', 'canceled', 'in_progress', 'partial_completed', 'completed', 'reschedule'])->default('Pending')->change();
            $table->boolean('is_date_flexible')->default(false)->after('status');
            $table->date('start_date')->nullable()->after('is_date_flexible');
            $table->date('end_date')->nullable()->after('start_date');
            $table->enum('is_time_flexible',['anytime','before','after','between'])->nullable()->after('end_date');
            $table->time('start_time')->nullable()->after('is_time_flexible');
            $table->time('end_time')->nullable()->after('start_time');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('bookings', function (Blueprint $table) {
            $table->enum('status', ['pending', 'confirmed', 'canceled', 'in_progress', 'partial_completed', 'completed', 'reschedule'])->default('Pending')->change();
            $table->dropColumn('is_date_flexible');
            $table->dropColumn('start_date');
            $table->dropColumn('end_date');
            $table->dropColumn('is_time_flexible');
            $table->dropColumn('start_time');
            $table->dropColumn('end_time');
        });
    }
};
