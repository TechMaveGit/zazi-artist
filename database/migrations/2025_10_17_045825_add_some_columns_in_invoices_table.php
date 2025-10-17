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
        Schema::table('invoices', function (Blueprint $table) {
            $table->string('invoice_number')->nullable()->after('id');
            $table->enum('status', ['unpaid','partial','paid'])->default('unpaid')->change();
            $table->boolean('is_publish')->default(false)->after('status');
            $table->dropForeign('invoices_booking_service_id_foreign');
            $table->dropColumn('booking_service_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('invoices', function (Blueprint $table) {
            $table->dropColumn('invoice_number');
            $table->dropColumn('is_publish');
            $table->dropColumn('status');
            $table->unsignedBigInteger('booking_service_id');
            $table->foreign('booking_service_id')->references('id')->on('booking_services')->onDelete('cascade');
        });
    }
};
