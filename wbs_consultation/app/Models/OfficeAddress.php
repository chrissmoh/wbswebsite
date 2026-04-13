<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OfficeAddress extends Model
{
    protected $fillable = [
        'city',
        'po_box',
        'street',
        'area',
        'building',
        'country',
        'email',
        'phone',
        'is_head_office',
    ];
}
