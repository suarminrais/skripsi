<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(User::class, 'user');
    }

    public function index()
    {
        return User::latest()->paginate();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $this->validate($request, [
            'name' => 'sometimes',
            'password' => 'sometimes|confirmed',
            'email' => 'sometimes|unique:users',
            'image' => 'sometimes|image',
        ]);

        $req = [];

        if ($request->name) {
            array_push($req, [
                'name' => $request->name,
            ]);
        }

        if ($request->email) {
            array_push($req, [
                'email' => $request->email,
            ]);
        }

        if ($request->password) {
            array_push($req, [
                'password' => Hash::make($request->password),
            ]);
        }

        if ($request->hasFile('image')) {
            $name = time() . '.jpg';
            $request->image->storeAs('public/images', $name);
            $user->image()->update([
                'name' => $name
            ]);
        }

        $user->update();

        return response()->json([
            'message' => "data updated!"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
