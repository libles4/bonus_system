<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BonusType extends Model
{
    use HasFactory;

    // Указываем, какие поля можно заполнять через массовое назначение (mass assignment)
    protected $fillable = [
        'code', 'name', 'auto'
    ];

    // Определяем связь "Один ко многим" с таблицей BonusTransaction
    public function bonusTransactions()
    {
        return $this->hasMany(BonusTransaction::class);
    }
}
