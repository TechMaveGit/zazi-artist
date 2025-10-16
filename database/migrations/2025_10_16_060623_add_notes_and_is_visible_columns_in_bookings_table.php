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
            $table->boolean('is_visible')->default(true)->after('status'); 
            $table->boolean('is_direct_booking')->default(false)->after('is_visible'); 
            $table->text('notes')->nullable()->after('reason');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('bookings', function (Blueprint $table) {
            $table->dropColumn('notes');
            $table->dropColumn('is_direct_booking');
            $table->dropColumn('is_visible');
        });
    }
};
