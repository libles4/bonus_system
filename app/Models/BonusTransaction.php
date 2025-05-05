<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BonusTransaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'bonus_type_id', 'type', 'amount', 'reason', 'expires_at', 'status'
    ];

    // Связь с пользователем
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Связь с типом бонуса
    public function bonusType()
    {
        return $this->belongsTo(BonusType::class);
    }
}