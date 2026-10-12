<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'id' => 1,
                'full_name' => 'Shinomiya Kaguya',
                'username' => 'chinomiya',
                'password' => Hash::make('121212'),
                'created_at' => '2026-10-01 03:59:17',
                'updated_at' => '2026-10-01 03:59:17',
            ],
            [
                'id' => 2,
                'full_name' => 'Kubo Nagisa',
                'username' => 'kubocchi',
                'password' => Hash::make('121212'),
                'created_at' => '2026-10-02 01:41:40',
                'updated_at' => '2026-10-02 01:41:40',
            ],
            [
                'id' => 4,
                'full_name' => 'Lord Kusanali',
                'username' => 'nahidung',
                'password' => Hash::make('121212'),
                'created_at' => '2026-10-02 01:42:16',
                'updated_at' => '2026-10-02 10:47:36',
            ],
            [
                'id' => 13,
                'full_name' => 'Alvian Cahyo Pambudi',
                'username' => 'pian',
                'password' => Hash::make('121212'),
                'created_at' => '2026-10-12 04:26:08',
                'updated_at' => '2026-10-12 04:26:08',
            ],
        ]);
    }
}
