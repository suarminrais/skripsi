<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Program;
use Illuminate\Http\Request;

class ProgramProgressController extends Controller
{
    public function update(Request $request, Program $program)
    {
        if ($request->user()->type !== 'petani') return response()->json([
            'message' => 'Opps...'
        ], 400);

        $this->validate($request, [
            'status' => 'required',
        ]);

        if ($request->status != 1 || $request->status > 5) return response()->json([
            'message' => 'Opps...'
        ], 400);

        $program->update($request->only(['status']));

        return response()->json([
            'message' => 'Success updated data!',
        ]);
    }
}
