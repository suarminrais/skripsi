<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Invest;
use App\Models\Program;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InvestController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Invest::class, 'invest');
    }

    public function index()
    {
        if (Auth::user()->type === 'pemodal') Invest::where('user_id', Auth::user()->id)->latest()->paginate();
        return Invest::latest()->paginate();
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'total' => 'required',
            'program_id' => 'required',
        ]);

        $request->user()->invests()->create($request->only(['total', 'program_id']));

        return response()->json([
            'message' => 'Success created data!'
        ]);
    }

    public function update(Request $request, Invest $invest)
    {
        if (Auth::user()->type === 'pemodal') {
            $this->validate($request, [
                'image' => 'required|image',
            ]);
            if ($request->hasFile('image')) {
                $name = time() . '.jpg';
                $request->image->storeAs('public/images', $name);
                $invest->image()->create([
                    'name' => $name
                ]);
            }
        } else {
            $invest->update([
                'status' => true,
            ]);
        }

        return response()->json([
            'message' => 'Success updated data!'
        ]);
    }

    public function destroy(Invest $invest)
    {
        $invest->image()->delete();
        $invest->delete();

        return response()->json([
            'message' => 'Success deleted data!'
        ]);
    }
}
