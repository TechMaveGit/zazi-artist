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
        Schema::table('shop_scheduleds', function (Blueprint $table) {
            $table->foreignId('shop_location_id')->nullable()->constrained()->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('shop_scheduleds', function (Blueprint $table) {
            $table->dropForeign(['shop_location_id']);
            $table->dropColumn('shop_location_id');
        });
    }
};
