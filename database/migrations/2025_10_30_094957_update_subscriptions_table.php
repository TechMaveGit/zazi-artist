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
        Schema::table('subscriptions', function (Blueprint $table) {
            $table->enum('type', ['individual', 'multiple'])->default('individual')->after('description');
            $table->renameColumn('max_branches', 'max_location');
            $table->dropColumn('max_artists_per_branch');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('subscriptions', function (Blueprint $table) {
            $table->dropColumn('type');
            $table->renameColumn('max_location', 'max_branches');
            $table->integer('max_artists_per_branch')->default(1);
        });
    }
};
