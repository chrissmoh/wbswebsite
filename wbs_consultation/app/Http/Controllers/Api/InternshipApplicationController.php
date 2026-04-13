<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\InternshipApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class InternshipApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(InternshipApplication::latest()->paginate(20));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:50'],
            'university' => ['required', 'string', 'max:255'],
            'course_of_study' => ['required', 'string', 'max:255'],
            'year_of_study' => ['required', 'string', 'max:100'],
            'cover_message' => ['nullable', 'string'],
            'cv' => ['nullable', 'file', 'mimes:pdf,doc,docx', 'max:5120'],
        ]);

        if ($request->hasFile('cv')) {
            $path = $request->file('cv')->store('internship-cv', 'public');
            $validated['cv_path'] = Storage::url($path);
        }

        return response()->json(InternshipApplication::create($validated), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return response()->json(InternshipApplication::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $application = InternshipApplication::findOrFail($id);
        $validated = $request->validate([
            'full_name' => ['sometimes', 'string', 'max:255'],
            'email' => ['sometimes', 'email', 'max:255'],
            'phone' => ['sometimes', 'string', 'max:50'],
            'university' => ['sometimes', 'string', 'max:255'],
            'course_of_study' => ['sometimes', 'string', 'max:255'],
            'year_of_study' => ['sometimes', 'string', 'max:100'],
            'cover_message' => ['nullable', 'string'],
            'status' => ['sometimes', 'string', 'max:50'],
            'cv' => ['nullable', 'file', 'mimes:pdf,doc,docx', 'max:5120'],
        ]);

        if ($request->hasFile('cv')) {
            $path = $request->file('cv')->store('internship-cv', 'public');
            $validated['cv_path'] = Storage::url($path);
        }

        $application->update($validated);
        return response()->json($application);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        InternshipApplication::findOrFail($id)->delete();
        return response()->noContent();
    }
}
