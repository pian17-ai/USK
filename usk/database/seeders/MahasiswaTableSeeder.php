<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use function Symfony\Component\Clock\now;

class MahasiswaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('mahasiswas')->insert([
            [
                'npm' => '08324398',
                'nama' => 'Alvian Cahyo Pambudi',
                'prodi' => 'Sekolah Teknik Elektro dan Informatika - Komputasi',
                'tahun_masuk' => '2027',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'npm' => '08324398',
                'nama' => 'Nagisa Kubo',
                'prodi' => 'Fakultas Seni Rupa dan Desain',
                'tahun_masuk' => '2027',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'npm' => '08324398',
                'nama' => 'Nahida',
                'prodi' => 'Sekolah Farmasi',
                'tahun_masuk' => '2027',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'npm' => '08324398',
                'nama' => 'Shinomiya Kaguya',
                'prodi' => 'Sekolah Bisnis dan Manajemen',
                'tahun_masuk' => '2027',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
