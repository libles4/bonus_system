<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BonusTransaction;
use Illuminate\Http\Request;

class BonusTransactionController extends Controller
{
    public function index()
    {
        return response()->json(BonusTransaction::with(['user', 'bonusType'])->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'bonus_type_id' => 'required|exists:bonus_types,id',
            'type' => 'required|in:accrual,spend,burn',
            'amount' => 'required|numeric|min:0.01',
            'reason' => 'nullable|string',
            'expires_at' => 'nullable|date',
            'status' => 'required|in:active,used,expired',
        ]);

        $transaction = BonusTransaction::create($validated);

        return response()->json($transaction, 201);
    }

    public function show($id)
    {
        $transaction = BonusTransaction::with(['user', 'bonusType'])->find($id);
        if (!$transaction) {
            return response()->json(['error' => 'Transaction not found'], 404);
        }
        return response()->json($transaction);
    }

    public function update(Request $request, $id)
    {
        $transaction = BonusTransaction::find($id);
        if (!$transaction) {
            return response()->json(['error' => 'Transaction not found'], 404);
        }

        $validated = $request->validate([
            'user_id' => 'sometimes|required|exists:users,id',
            'bonus_type_id' => 'sometimes|required|exists:bonus_types,id',
            'type' => 'sometimes|required|in:accrual,spend,burn',
            'amount' => 'sometimes|required|numeric|min:0.01',
            'reason' => 'nullable|string',
            'expires_at' => 'nullable|date',
            'status' => 'sometimes|required|in:active,used,expired',
        ]);

        $transaction->update($validated);

        return response()->json($transaction);
    }

    public function destroy($id)
    {
        $transaction = BonusTransaction::find($id);
        if (!$transaction) {
            return response()->json(['error' => 'Transaction not found'], 404);
        }

        $transaction->delete();
        return response()->json(['message' => 'Transaction deleted successfully']);
    }
}
