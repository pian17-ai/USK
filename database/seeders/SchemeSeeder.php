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
        DB::table('certification_scheme')->insert([
            [
                'id' => 1,
                'scheme_code' => 'BE',
                'scheme_name' => 'Backend Developer',
                'description' => 'RESTFull API',
                'created_at' => '2026-10-01 02:34:57',
                'updated_at' => '2026-10-01 02:34:57',
            ],
            [
                'id' => 2,
                'scheme_code' => 'FE',
                'scheme_name' => 'Frontend Developer',
                'description' => 'Consume API',
                'created_at' => '2026-10-01 03:14:11',
                'updated_at' => '2026-10-02 02:25:53',
            ],
            [
                'id' => 4,
                'scheme_code' => 'DO',
                'scheme_name' => 'DevOps',
                'description' => 'Debian and Ubuntu server',
                'created_at' => '2026-10-02 03:52:23',
                'updated_at' => '2026-10-02 04:03:32',
            ],
            [
                'id' => 6,
                'scheme_code' => 'SC',
                'scheme_name' => 'Cyber Security',
                'description' => 'Blue and Red Hat',
                'created_at' => '2026-10-05 04:14:15',
                'updated_at' => '2026-10-05 04:35:31',
            ],
        ]);
    }
}
