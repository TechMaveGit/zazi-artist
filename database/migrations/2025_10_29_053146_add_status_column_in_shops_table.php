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
        Schema::table('shops', function (Blueprint $table) {
            $table->enum('status', ['active', 'inactive','suspended'])->default('active')->after('banner_img');
            $table->dropColumn('is_opened_today');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('shops', function (Blueprint $table) {
            $table->dropColumn('status');
            $table->boolean('is_opened_today')->default(true)->after('banner_img');
        });
    }
};
