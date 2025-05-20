<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    // Указываем, какие поля можно массово заполнять
    protected $fillable = [
        'name', 'email', 'phone', 'password', "tg", 
    ];

    // Указываем, какие поля должны быть скрыты при преобразовании в массив или JSON
    protected $hidden = [
        'password', 'remember_token',
    ];

    // Указываем, какие атрибуты должны быть кастованы в примитивные типы
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Связь с балансом бонусов
    public function bonusBalance()
    {
        return $this->hasOne(BonusBalance::class);
    }

    // Связь с транзакциями бонусов
    public function bonusTransactions()
    {
        return $this->hasMany(BonusTransaction::class);
    }
}