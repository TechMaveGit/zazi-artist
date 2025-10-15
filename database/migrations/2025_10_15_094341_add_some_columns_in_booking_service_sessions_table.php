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
        Schema::table('booking_service_sessions', function (Blueprint $table) {
            $table->text('treatment_details')->nullable()->after('end_time');
            $table->json('before_img')->nullable()->after('treatment_details');
            $table->json('after_img')->nullable()->after('before_img');
            $table->json('healed_img')->nullable()->after('after_img');
            $table->text('skin_type')->nullable()->after('healed_img');
            $table->text('equipment_used')->nullable()->after('skin_type');
            $table->text('consent_notes')->nullable()->after('equipment_used');
            $table->text('session_notes')->nullable()->after('consent_notes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('booking_service_sessions', function (Blueprint $table) {
            $table->dropColumn('treatment_details');
            $table->dropColumn('before_img');
            $table->dropColumn('after_img');
            $table->dropColumn('healed_img');
            $table->dropColumn('skin_type');
            $table->dropColumn('equipment_used');
            $table->dropColumn('consent_notes');
            $table->dropColumn('session_notes');
        });
    }
};
