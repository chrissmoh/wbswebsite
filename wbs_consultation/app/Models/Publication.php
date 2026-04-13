<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Publication extends Model
{
    protected $fillable = [
        'title',
        'author',
        'description',
        'cover_image_url',
        'is_featured',
        'contact_to_buy',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
    ];
}
