<?php

use App\Http\Controllers\Api\ContactInquiryController;
use App\Http\Controllers\Api\InternshipApplicationController;
use App\Http\Controllers\Api\NewsPostController;
use App\Http\Controllers\Api\OfficeAddressController;
use App\Http\Controllers\Api\PublicationController;
use App\Http\Controllers\Api\TrainingProgramController;
use Illuminate\Support\Facades\Route;

Route::get('/health', fn () => response()->json(['status' => 'ok']));

Route::apiResource('office-addresses', OfficeAddressController::class);
Route::apiResource('contact-inquiries', ContactInquiryController::class);
Route::apiResource('internship-applications', InternshipApplicationController::class);
Route::apiResource('news-posts', NewsPostController::class);
Route::apiResource('publications', PublicationController::class);
Route::apiResource('training-programs', TrainingProgramController::class);
