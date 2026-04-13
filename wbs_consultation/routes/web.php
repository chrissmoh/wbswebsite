<?php

use App\Http\Controllers\Admin\DashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/admin');
});

Route::get('/admin', [DashboardController::class, 'index']);
Route::post('/admin/inquiries/{inquiry}/status', [DashboardController::class, 'updateInquiryStatus'])->name('admin.inquiries.status');
Route::post('/admin/internships/{internship}/status', [DashboardController::class, 'updateInternshipStatus'])->name('admin.internships.status');
Route::post('/admin/publications', [DashboardController::class, 'storePublication'])->name('admin.publications.store');
Route::post('/admin/training-programs', [DashboardController::class, 'storeTrainingProgram'])->name('admin.training-programs.store');
Route::post('/admin/news-posts', [DashboardController::class, 'storeNewsPost'])->name('admin.news-posts.store');
