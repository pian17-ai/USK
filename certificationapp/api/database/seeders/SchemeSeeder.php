<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SchemeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('certification_schemes')->insert([
            [
                'id' => 1,
                'scheme_code' => 'BE',
                'scheme_name' => 'Backend Developer',
                'description' => 'RESTFull API',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 2,
                'scheme_code' => 'FE',
                'scheme_name' => 'Frontend Developer',
                'description' => 'Consume API',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 3,
                'scheme_code' => 'DO',
                'scheme_name' => 'DevOps',
                'description' => 'Debian and Ubuntu server',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 4,
                'scheme_code' => 'SC',
                'scheme_name' => 'Cyber Security',
                'description' => 'Blue and Red Hat',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
