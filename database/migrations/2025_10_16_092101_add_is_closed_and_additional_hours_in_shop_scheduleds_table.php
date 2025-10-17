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
            $table->time('opening_time')->nullable()->change();
            $table->time('closing_time')->nullable()->change();
            $table->boolean('is_closed')->default(false);
            $table->json('additional_hours')->nullable()->after('is_closed');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('shop_scheduleds', function (Blueprint $table) {
            $table->time('opening_time')->change();
            $table->time('closing_time')->change();
            $table->dropColumn('is_closed');
            $table->dropColumn('additional_hours');
        });
    }
};
