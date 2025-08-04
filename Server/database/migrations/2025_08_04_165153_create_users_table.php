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
        Schema::create('users', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('name', 100);
            $table->string('email', 100);
            $table->string('password');
            $table->string('phone', 20)->nullable();
            $table->enum('role', ['user', 'admin'])->nullable()->default('user');
            $table->enum('status', ['active', 'inactive'])->nullable()->default('active');
            $table->dateTime('created_at')->nullable()->useCurrent();
            $table->dateTime('updated_at')->useCurrentOnUpdate()->nullable()->useCurrent();
            $table->string('user_profile')->default('');
            $table->enum('gender', ['male', 'female'])->nullable()->default('male');
            $table->string('email_token')->nullable();
            $table->dateTime('token_expiry')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
