<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BonusBalance;
use Illuminate\Http\Request;

class BonusBalanceController extends Controller
{
    public function index()
    {
        return response()->json(BonusBalance::with('user')->get());
    }

    public function show($id)
    {
        $balance = BonusBalance::with('user')->find($id);
        if (!$balance) {
            return response()->json(['error' => 'Balance not found'], 404);
        }
        return response()->json($balance);
    }

    public function update(Request $request, $id)
    {
        $balance = BonusBalance::find($id);
        if (!$balance) {
            return response()->json(['error' => 'Balance not found'], 404);
        }

        $validated = $request->validate([
            'balance' => 'nullable|numeric|min:0',
            'blocked' => 'nullable|boolean',
            'updated_at' => 'nullable|date',
        ]);

        $balance->update($validated);

        return response()->json($balance);
    }
}
