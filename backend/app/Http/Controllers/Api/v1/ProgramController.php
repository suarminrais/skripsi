<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Program;
use Illuminate\Http\Request;

class ProgramController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Program::class, 'program');
    }

    public function index()
    {
        return Program::latest()->paginate();
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
            'message' => 'success created data!'
        ]);
    }

    public function show(Program $program)
    {
        return $program;
    }

    public function update(Request $request, Program $program)
    {
        if ($program->status !== 1) return response()->json([
            'message' => 'Opss. data sudah tidak bisa diubah!'
        ]);

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
            'image' => 'sometimes|image'
        ]);

        if ($request->hasFile('image')) {
            $name = time() . '.jpg';
            $request->image->storeAs('public/images', $name);
            $program->image()->create([
                'name' => $name
            ]);
        }

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

        return response()->json([
            'message' => 'success updated data!'
        ]);
    }

    public function destroy(Program $program)
    {
        if ($program->status !== 1) return response()->json([
            'message' => 'Opss. data sudah tidak bisa dihapus!'
        ]);

        $program->image()->delete();

        $program->delete();

        return response()->json([
            'message' => 'success updated data!'
        ]);
    }
}
