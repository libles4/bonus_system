<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BonusBalance extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'balance', 'blocked', 'updated_at'
    ];

    // Связь с пользователем
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}