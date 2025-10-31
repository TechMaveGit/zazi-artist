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
        Schema::table('users', function (Blueprint $table) {
            $table->string('phone_code')->nullable()->after('email');
            $table->string('phone')->nullable()->after('phone_code');
            $table->enum('gender',['male','female','other'])->nullable()->after('phone');
            $table->string('location')->nullable()->after('gender');
            $table->enum('type',['admin','customer','artist','salon','staff'])->nullable()->after('location');
            $table->string('profile')->nullable()->after('type');
            $table->text('about')->nullable()->after('profile');
            $table->json('categories')->nullable()->after('about');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
