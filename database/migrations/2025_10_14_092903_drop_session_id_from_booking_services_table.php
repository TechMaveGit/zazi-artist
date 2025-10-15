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
            $table->dropForeign('booking_services_session_id_foreign');
            $table->dropColumn('session_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('booking_services', function (Blueprint $table) {
            $table->unsignedBigInteger('session_id')->nullable()->after('service_id');
            $table->foreign('session_id')->references('id')->on('service_sessions')->onDelete('cascade');
        });
    }
};
