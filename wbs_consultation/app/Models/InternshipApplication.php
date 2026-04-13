<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InternshipApplication extends Model
{
    protected $fillable = [
        'full_name',
        'email',
        'phone',
        'university',
        'course_of_study',
        'year_of_study',
        'cv_path',
        'cover_message',
        'status',
    ];
}
