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
        Schema::create('user_subscriptions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('subscription_id')->constrained('subscriptions')->onDelete('cascade');
            $table->decimal('price', 8, 2);
            $table->string('currency', 3);
            $table->timestamp('purchase_date')->nullable();
            $table->timestamp('expiry_date')->nullable();
            $table->string('status')->default('active'); // e.g., active, cancelled, expired
            $table->string('payment_method')->nullable(); // e.g., credit_card, paypal
            $table->string('stripe_payment_intent_id')->nullable();
            $table->json('stripe_response')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_subscriptions');
    }
};
