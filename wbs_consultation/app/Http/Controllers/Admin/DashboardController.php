<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactInquiry;
use App\Models\InternshipApplication;
use App\Models\NewsPost;
use App\Models\OfficeAddress;
use App\Models\Publication;
use App\Models\TrainingProgram;

class DashboardController extends Controller
{
    public function index()
    {
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
        ]);
    }
}
