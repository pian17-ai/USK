<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CandidateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('certification_candidates')->insert([
            [
                'id' => 1,
                "candidate_number" => rand(000000 - 999999),
                'full_name' => 'Nagisa Kubo',
                'email' => 'kubocchi@arch.org',
                'phone_number' => '082374237423',
                'born_date' => '2009-05-10',
                'gender' => 'female',
                'address' => 'Tokyo, Japan',
                'certification_scheme_id' => 2,
                'created_at' => '2026-10-01 03:30:45',
                'updated_at' => '2026-10-05 04:06:49',
            ],
            [
                'id' => 3,
                "candidate_number" => rand(000000 - 999999),
                'full_name' => 'Shinomiya Kaguya',
                'email' => 'chinomiya@arch.org',
                'phone_number' => '082380234236',
                'born_date' => '2019-08-12',
                'gender' => 'female',
                'address' => 'Tokyo, Japan',
                'certification_scheme_id' => 2,
                'created_at' => '2026-10-02 02:26:32',
                'updated_at' => '2026-10-02 02:26:32',
            ],
            [
                'id' => 8,
                "candidate_number" => rand(000000 - 999999),
                'full_name' => 'Lord Kusanali',
                'email' => 'nahihi@arch.org',
                'phone_number' => '082143234598',
                'born_date' => '2011-10-11',
                'gender' => 'female',
                'address' => 'Sumeru, Teyvat',
                'certification_scheme_id' => 4,
                'created_at' => '2026-10-05 03:54:47',
                'updated_at' => '2026-10-05 03:54:56',
            ],
            [
                'id' => 9,
                "candidate_number" => rand(000000 - 999999),
                'full_name' => 'P P Apa',
                'email' => 'pian@arch.org',
                'phone_number' => '01298301283',
                'born_date' => '2026-09-28',
                'gender' => 'male',
                'address' => 'apA P P',
                'certification_scheme_id' => 6,
                'created_at' => '2026-10-05 04:46:08',
                'updated_at' => '2026-10-05 04:46:08',
            ],
            [
                'id' => 10,
                "candidate_number" => rand(000000 - 999999),
                'full_name' => 'Shinomiya Kaguya',
                'email' => 'chinomiya@arch.org',
                'phone_number' => '082343892348',
                'born_date' => '2009-04-23',
                'gender' => 'female',
                'address' => 'Tokyo, Japan',
                'certification_scheme_id' => 1,
                'created_at' => '2026-10-05 07:40:39',
                'updated_at' => '2026-10-05 07:40:39',
            ],
        ]);
    }
}
