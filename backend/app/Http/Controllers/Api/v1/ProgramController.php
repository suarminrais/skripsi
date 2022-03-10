<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Program;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProgramController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Program::class, 'program');
    }

    public function index()
    {
        if (Auth::check() && Auth::user()->type === 'petani') return Program::where('user_id', Auth::user()->id)->latest()->paginate();
        if (Auth::check() && Auth::user()->type === 'admin') return Program::latest()->paginate();
        return Program::where('status', '!=', 1)->latest()->paginate();
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'description' => 'required',
            'name' => 'required',
            'type' => 'required',
            'location' => 'required',
            'latitude' => 'required',
            'longitude' => 'required',
            'periode' => 'required',
            'interest' => 'required',
            'funding' => 'required',
            'user_id' => 'required',
            'image' => 'required|image'
        ]);

        $program = Program::create(
            $request->only([
                'description',
                'name',
                'type',
                'location',
                'latitude',
                'longitude',
                'periode',
                'interest',
                'funding',
                'status',
                'user_id',
            ])
        );

        if ($request->hasFile('image')) {
            $name = time() . '.jpg';
            $request->image->storeAs('public/images', $name);
            $program->image()->create([
                'name' => $name
            ]);
        }

        return response()->json([
            'message' => 'Success created data!'
        ]);
    }

    public function show(Program $program)
    {
        return $program;
    }

    public function update(Request $request, Program $program)
    {
        if (Auth::user()->type === 'petani' && $program->status != 1) return response()->json([
            'message' => 'Opss. data sudah tidak bisa diubah!'
        ], 400);

        $this->validate($request, [
            'description' => 'sometimes',
            'name' => 'sometimes',
            'type' => 'sometimes',
            'location' => 'sometimes',
            'latitude' => 'sometimes',
            'longitude' => 'sometimes',
            'periode' => 'sometimes',
            'interest' => 'sometimes',
            'funding' => 'sometimes',
            'status' => 'sometimes',
            'image' => 'sometimes|image'
        ]);

        if ($request->hasFile('image')) {
            $name = time() . '.jpg';
            $request->image->storeAs('public/images', $name);
            $program->image()->create([
                'name' => $name
            ]);
        }

        if (Auth::user()->type === 'admin')
            $program->update(
                $request->only([
                    'description',
                    'name',
                    'type',
                    'location',
                    'latitude',
                    'longitude',
                    'periode',
                    'interest',
                    'funding',
                    'status',
                ])
            );

        $program->update(
            $request->only([
                'description',
                'name',
                'type',
                'location',
                'latitude',
                'longitude',
                'periode',
                'interest',
                'funding',
            ])
        );

        return response()->json([
            'message' => 'Success updated data!'
        ]);
    }

    public function destroy(Program $program)
    {
        if (Auth::user()->type === 'petani' && $program->status != 1) return response()->json([
            'message' => 'Opss. data sudah tidak bisa dihapus!'
        ], 400);

        if (Auth::user()->type == 'admin' && $program->status == 1) {
            $program->update(['status' => 2]);

            return response()->json([
                'message' => 'Program accepted!'
            ]);
        }

        $program->image()->delete();

        $program->delete();

        return response()->json([
            'message' => 'Success deleted data!'
        ]);
    }
}
