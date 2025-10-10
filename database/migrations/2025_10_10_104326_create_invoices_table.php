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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('booking_id');
            $table->foreign('booking_id')->references('id')->on('bookings')->onDelete('cascade');
            $table->unsignedBigInteger('booking_service_id');
            $table->foreign('booking_service_id')->references('id')->on('booking_services')->onDelete('cascade');
            $table->decimal('price', 10,2);
            $table->decimal('request_amount', 10,2);
            $table->decimal('discount', 10,2);
            $table->decimal('tax', 10,2);
            $table->decimal('sub_total', 10,2);
            $table->decimal('grand_total', 10,2);
            $table->text('note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
