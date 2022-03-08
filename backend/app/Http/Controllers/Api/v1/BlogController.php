<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Blog::class, 'blog');
    }

    public function index()
    {
        return Blog::latest()->paginate();
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'description' => 'required',
            'name' => 'required',
            'image' => 'required|image'
        ]);

        $blog = Blog::create(
            $request->only([
                'description',
                'name',
            ])
        );

        if ($request->hasFile('image')) {
            $name = time() . '.jpg';
            $request->image->storeAs('public/images', $name);
            $blog->image()->create([
                'name' => $name
            ]);
        }

        return response()->json([
            'message' => 'success created data!'
        ]);
    }

    public function show(Blog $blog)
    {
        return $blog;
    }

    public function update(Request $request, Blog $blog)
    {
        $this->validate($request, [
            'description' => 'sometimes',
            'name' => 'sometimes',
            'image' => 'sometimes|image'
        ]);

        $blog->update(
            $request->only([
                'description',
                'name',
            ])
        );

        if ($request->hasFile('image')) {
            $name = time() . '.jpg';
            $request->image->storeAs('public/images', $name);
            $blog->image()->update([
                'name' => $name
            ]);
        }

        return response()->json([
            'message' => 'success updated data!'
        ]);
    }

    public function destroy(Blog $blog)
    {
        $blog->image()->delete();
        $blog->delete();

        return response()->json([
            'message' => 'success deleted data!'
        ]);
    }
}
