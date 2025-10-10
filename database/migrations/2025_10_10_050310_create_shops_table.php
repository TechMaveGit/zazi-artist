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
        Schema::create('shops', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('name');
            $table->string('email', 50)->unique();
            $table->string('dial_code', 10);
            $table->string('phone', 20);
            $table->string('address');
            $table->string('lat', 50)->nullable();
            $table->string('lng', 50)->nullable();
            $table->string('country');
            $table->string('city');
            $table->string('state')->nullable();
            $table->string('zipcode');
            $table->text('description')->nullable();
            $table->json('banner_img')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shops');
    }
};
