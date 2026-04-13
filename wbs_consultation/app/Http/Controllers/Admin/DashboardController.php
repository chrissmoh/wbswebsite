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

        $activityFeed = collect()
            ->merge(ContactInquiry::latest()->take(8)->get()->map(fn ($item) => [
                'type' => 'Inquiry',
                'title' => $item->subject ?? 'Contact Inquiry',
                'detail' => $item->full_name.' ('.$item->email.')',
                'status' => $item->status ?? 'new',
                'time' => $item->created_at,
            ]))
            ->merge(InternshipApplication::latest()->take(8)->get()->map(fn ($item) => [
                'type' => 'Internship',
                'title' => 'Internship Application',
                'detail' => $item->full_name.' - '.$item->university,
                'status' => $item->status ?? 'pending',
                'time' => $item->created_at,
            ]))
            ->merge(Publication::latest()->take(6)->get()->map(fn ($item) => [
                'type' => 'Book',
                'title' => $item->title,
                'detail' => $item->author ?? 'No author',
                'status' => $item->is_featured ? 'featured' : 'normal',
                'time' => $item->created_at,
            ]))
            ->merge(TrainingProgram::latest()->take(6)->get()->map(fn ($item) => [
                'type' => 'Training',
                'title' => $item->title,
                'detail' => $item->location ?? 'No location',
                'status' => $item->is_active ? 'active' : 'inactive',
                'time' => $item->created_at,
            ]))
            ->sortByDesc('time')
            ->take(15)
            ->values();

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
            'latestEnrollmentInquiries' => ContactInquiry::where('subject', 'like', '%Admissions%')->latest()->take(10)->get(),
            'latestInternships' => InternshipApplication::latest()->take(10)->get(),
            'latestNews' => NewsPost::latest('published_at')->take(10)->get(),
            'latestPublications' => Publication::latest()->take(10)->get(),
            'latestPrograms' => TrainingProgram::latest('start_date')->take(10)->get(),
            'officeAddresses' => OfficeAddress::latest()->take(10)->get(),
            'inquiryStats' => $inquiryStats,
            'activityFeed' => $activityFeed,
        ]);
    }

    public function storePublication(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'author' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'cover_image_url' => ['nullable', 'url'],
            'contact_to_buy' => ['nullable', 'string', 'max:255'],
            'is_featured' => ['nullable', 'boolean'],
        ]);

        $validated['is_featured'] = $request->boolean('is_featured');
        Publication::create($validated);

        return back()->with('success', 'Publication added successfully.');
    }

    public function storeTrainingProgram(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'start_date' => ['nullable', 'date'],
            'end_date' => ['nullable', 'date'],
            'location' => ['nullable', 'string', 'max:255'],
            'is_active' => ['nullable', 'boolean'],
        ]);

        $validated['is_active'] = $request->boolean('is_active');
        TrainingProgram::create($validated);

        return back()->with('success', 'Training program added successfully.');
    }

    public function storeNewsPost(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'body' => ['required', 'string'],
            'type' => ['required', 'in:news,advertisement'],
            'published_at' => ['nullable', 'date'],
            'is_published' => ['nullable', 'boolean'],
        ]);

        $validated['is_published'] = $request->boolean('is_published');
        NewsPost::create($validated);

        return back()->with('success', 'News/advertisement post added successfully.');
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
