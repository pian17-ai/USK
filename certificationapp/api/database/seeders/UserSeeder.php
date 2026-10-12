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
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 2,
                'full_name' => 'Kubo Nagisa',
                'username' => 'kubocchi',
                'password' => Hash::make('121212'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 4,
                'full_name' => 'Lord Kusanali',
                'username' => 'nahidung',
                'password' => Hash::make('121212'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => 13,
                'full_name' => 'Alvian Cahyo Pambudi',
                'username' => 'pian',
                'password' => Hash::make('121212'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
