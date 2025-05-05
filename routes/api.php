<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\BonusTypeController;
use App\Http\Controllers\Api\BonusTransactionController;
use App\Http\Controllers\Api\BonusBalanceController;

Route::middleware('api')->group(function () {
    // Маршруты для пользователей
    Route::apiResource('users', UserController::class);

    // Маршруты для типов бонусов
    Route::apiResource('bonus_types', BonusTypeController::class);

    // Маршруты для транзакций бонусов
    Route::apiResource('bonus_transactions', BonusTransactionController::class);

    // Маршруты для балансов пользователей
    Route::apiResource('bonus_balances', BonusBalanceController::class);
});
