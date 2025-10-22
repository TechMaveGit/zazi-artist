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
            $table->decimal('sub_total', 10,2)->after('booking_id')->change();
            $table->decimal('discount', 10,2)->after('sub_total')->change();
            $table->decimal('tax', 10,2)->after('discount')->change();
            $table->decimal('grand_total', 10,2)->after('tax')->change();
            $table->decimal('paid_amount', 10,2)->after('grand_total');
            $table->decimal('remaining_amount', 10,2)->after('paid_amount');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('invoices', function (Blueprint $table) {
            $table->decimal('sub_total', 10,2)->change();
            $table->decimal('discount', 10,2)->change();
            $table->decimal('tax', 10,2)->change();
            $table->decimal('grand_total', 10,2)->change();
            $table->dropColumn('paid_amount');
            $table->dropColumn('remaining_amount');
        });
    }
};
