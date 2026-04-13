<?php

use App\Http\Controllers\Admin\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/admin');
});

Route::get('/admin', [DashboardController::class, 'index']);
Route::post('/admin/inquiries/{inquiry}/status', [DashboardController::class, 'updateInquiryStatus'])->name('admin.inquiries.status');
Route::post('/admin/internships/{internship}/status', [DashboardController::class, 'updateInternshipStatus'])->name('admin.internships.status');
