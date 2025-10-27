<?php

namespace Database\Seeders;

use App\Models\PlanFeature;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanFeatureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $features = [
            ['name' => 'Online Booking System', 'description' => 'Allow customers to book appointments online', 'status' => true],
            ['name' => 'Artist Management', 'description' => 'Manage artists and their schedules', 'status' => true],
            ['name' => 'Analytics Dashboard', 'description' => 'Get detailed insights about your store', 'status' => true],
            ['name' => 'Custom Domain', 'description' => 'Use your own domain name', 'status' => true],
            ['name' => 'Social Media Integration', 'description' => 'Integrate with popular social media platforms', 'status' => true],
            ['name' => '24/7 Support', 'description' => 'Access to our support team anytime', 'status' => true],
            ['name' => 'Gallery Management', 'description' => 'Manage your store gallery', 'status' => true],
            ['name' => 'Custom Reviews', 'description' => 'Add your own reviews', 'status' => true],
            ['name' => 'Payment Integration', 'description' => 'Accept payments online', 'status' => true],
            ['name' => 'Custom Branding', 'description' => 'Customize the look and feel of your store', 'status' => true],
        ];

        foreach ($features as $feature) {
            PlanFeature::updateOrInsert(
                ['name' => $feature['name']],
                [
                    'description' => $feature['description'],
                    'status' => $feature['status'],
                    'created_at' => now(),
                    'updated_at' => now(),
                ]
            );
        }
    }
}
