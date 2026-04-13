<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactInquiry;
use Illuminate\Http\Request;

class ContactInquiryController extends Controller
{
    public function index()
    {
        return response()->json(ContactInquiry::latest()->paginate(20));
    }

    public function store(Request $request)
    {
        $request->merge([
            'full_name' => $request->input('full_name', $request->input('fullName')),
            'service_type' => $request->input('service_type', $request->input('serviceType', $request->input('companyOrInstitution'))),
            'subject' => $request->input('subject', $request->boolean('is_visit_client') ? 'Visit Client Request' : null),
        ]);

        $validated = $request->validate([
            'full_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:50'],
            'subject' => ['required', 'string', 'max:255'],
            'message' => ['required', 'string'],
            'service_type' => ['nullable', 'string', 'max:255'],
        ]);

        return response()->json(
            ContactInquiry::create($validated),
            201
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return response()->json(ContactInquiry::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $inquiry = ContactInquiry::findOrFail($id);
        $validated = $request->validate([
            'status' => ['required', 'string', 'max:50'],
        ]);
        $inquiry->update($validated);

        return response()->json($inquiry);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        ContactInquiry::findOrFail($id)->delete();

        return response()->noContent();
    }
}
