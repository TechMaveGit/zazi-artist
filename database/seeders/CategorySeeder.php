<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Spa',
            'Bleaching',
            'Makeup',
            'Tattoos',
            'Haircut',
            'Hair Coloring',
            'Facial',
            'Manicure',
            'Pedicure',
            'Waxing',
            'Body Massage',
            'Eyebrow Threading',
        ];

        foreach ($categories as $category) {
            Category::updateOrCreate([
                'name' => $category
            ],[
                 'description' => $category
            ]);
        }
    }
}
