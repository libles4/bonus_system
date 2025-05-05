<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BonusType;
use Illuminate\Http\Request;

class BonusTypeController extends Controller
{
    public function index()
    {
        return response()->json(BonusType::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'code' => 'required|string|unique:bonus_types,code',
            'name' => 'required|string|max:255',
            'auto' => 'nullable|boolean',
        ]);

        $bonusType = BonusType::create($validated);

        return response()->json($bonusType, 201);
    }

    public function show($id)
    {
        $bonusType = BonusType::find($id);
        if (!$bonusType) {
            return response()->json(['error' => 'Bonus Type not found'], 404);
        }
        return response()->json($bonusType);
    }

    public function update(Request $request, $id)
    {
        $bonusType = BonusType::find($id);
        if (!$bonusType) {
            return response()->json(['error' => 'Bonus Type not found'], 404);
        }

        $validated = $request->validate([
            'code' => 'sometimes|required|string|unique:bonus_types,code,' . $id,
            'name' => 'sometimes|required|string|max:255',
            'auto' => 'nullable|boolean',
        ]);

        $bonusType->update($validated);

        return response()->json($bonusType);
    }

    public function destroy($id)
    {
        $bonusType = BonusType::find($id);
        if (!$bonusType) {
            return response()->json(['error' => 'Bonus Type not found'], 404);
        }

        $bonusType->delete();
        return response()->json(['message' => 'Bonus Type deleted successfully']);
    }
}
