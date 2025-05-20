<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone')->nullable();
            $table->string('tg');
            $table->timestamps();
        });

        Schema::create('bonus_types', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('name');
            $table->boolean('auto')->default(false);
            $table->timestamps();
        });

        Schema::create('bonus_transactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('bonus_type_id')->constrained('bonus_types')->onDelete('cascade');
            $table->enum('type', ['accrual', 'spend', 'burn']);
            $table->decimal('amount', 10, 2);
            $table->text('reason')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->enum('status', ['active', 'used', 'expired']);
            $table->timestamps();
        });

        Schema::create('bonus_balances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->decimal('balance', 10, 2)->default(0);
            $table->boolean('blocked')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bonus_balances');
        Schema::dropIfExists('bonus_transactions');
        Schema::dropIfExists('bonus_types');
        Schema::dropIfExists('users');
    }
};
