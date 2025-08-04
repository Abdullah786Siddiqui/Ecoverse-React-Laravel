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
        Schema::create('orders', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('user_id')->nullable()->index('user_id');
            $table->integer('address_id')->nullable()->index('address_id');
            $table->decimal('total', 10)->nullable();
            $table->enum('status', ['pending', 'shipped', 'delivered', 'cancelled'])->nullable()->default('pending');
            $table->timestamp('created_at')->useCurrent();
            $table->enum('payment_method', ['Cash', 'Card', 'UPI', 'Wallet']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
