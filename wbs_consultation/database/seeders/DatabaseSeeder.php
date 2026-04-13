<?php

namespace Database\Seeders;

use App\Models\NewsPost;
use App\Models\OfficeAddress;
use App\Models\Publication;
use App\Models\TrainingProgram;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        OfficeAddress::insert([
            [
                'city' => 'DAR ES SALAAM',
                'po_box' => 'P.O BOX 13713',
                'street' => 'MASHUJAA STREET',
                'area' => 'SINZA LION OPPOSITE SHAMOOL HOTEL',
                'building' => null,
                'country' => 'Tanzania',
                'email' => 'info@wbs.co.tz',
                'phone' => '+255 658 646358',
                'is_head_office' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'city' => 'ARUSHA',
                'po_box' => 'P.O BOX 13713',
                'street' => 'TWIGA STREET',
                'area' => 'NJIRO, BENDERA SABA',
                'building' => 'HOUSE NUMBER 03',
                'country' => 'Tanzania',
                'email' => 'Writing.wbs@gmail.com',
                'phone' => '+255 713 110 235',
                'is_head_office' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        Publication::create([
            'title' => 'The Knowledge of Research Proposal',
            'author' => 'WBS Research Solutions Professionals',
            'description' => 'Flagship publication for students and researchers.',
            'is_featured' => true,
            'contact_to_buy' => '+255 658 646358',
        ]);

        TrainingProgram::create([
            'title' => 'Academic Writing and Proposal Development',
            'description' => 'Hands-on workshop for undergraduate and postgraduate students.',
            'start_date' => now()->addWeeks(2)->toDateString(),
            'end_date' => now()->addWeeks(3)->toDateString(),
            'location' => 'Dar es Salaam',
            'is_active' => true,
        ]);

        NewsPost::create([
            'title' => 'Internship Applications Open',
            'slug' => 'internship-applications-open',
            'excerpt' => 'Applications are now open for research and writing interns.',
            'content' => 'Submit your internship application online through the WBS website.',
            'type' => 'advertisement',
            'is_published' => true,
            'published_at' => now(),
        ]);
    }
}
