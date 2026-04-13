<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactInquiry;
use App\Models\InternshipApplication;
use App\Models\NewsPost;
use App\Models\OfficeAddress;
use App\Models\Publication;
use App\Models\TrainingProgram;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $inquiryStats = [
            'visit_client' => ContactInquiry::where('subject', 'like', '%Visit Client%')->count(),
            'admissions' => ContactInquiry::where('subject', 'like', '%Admissions%')->count(),
            'other' => ContactInquiry::whereNotIn('subject', ['Visit Client Request', 'Admissions Inquiry'])->count(),
        ];

        return view('admin.dashboard', [
            'counts' => [
                'contact_inquiries' => ContactInquiry::count(),
                'internship_applications' => InternshipApplication::count(),
                'news_posts' => NewsPost::count(),
                'publications' => Publication::count(),
                'training_programs' => TrainingProgram::count(),
                'office_addresses' => OfficeAddress::count(),
            ],
            'latestInquiries' => ContactInquiry::latest()->take(10)->get(),
            'latestInternships' => InternshipApplication::latest()->take(10)->get(),
            'latestNews' => NewsPost::latest('published_at')->take(10)->get(),
            'latestPublications' => Publication::latest()->take(10)->get(),
            'latestPrograms' => TrainingProgram::latest('start_date')->take(10)->get(),
            'officeAddresses' => OfficeAddress::latest()->take(10)->get(),
            'inquiryStats' => $inquiryStats,
        ]);
    }

    public function updateInquiryStatus(Request $request, ContactInquiry $inquiry): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', 'string', 'in:new,in_progress,resolved,closed'],
        ]);

        $inquiry->update($validated);

        return back()->with('success', 'Inquiry status updated.');
    }

    public function updateInternshipStatus(Request $request, InternshipApplication $internship): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', 'string', 'in:pending,reviewed,shortlisted,accepted,rejected'],
        ]);

        $internship->update($validated);

        return back()->with('success', 'Internship status updated.');
    }
}
