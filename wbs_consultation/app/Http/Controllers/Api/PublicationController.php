<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Publication;
use Illuminate\Http\Request;

class PublicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Publication::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'author' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'cover_image_url' => ['nullable', 'url'],
            'is_featured' => ['nullable', 'boolean'],
            'contact_to_buy' => ['nullable', 'string', 'max:255'],
        ]);

        return response()->json(Publication::create($validated), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return response()->json(Publication::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $publication = Publication::findOrFail($id);
        $publication->update($request->all());
        return response()->json($publication);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Publication::findOrFail($id)->delete();
        return response()->noContent();
    }
}
