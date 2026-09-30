<?php

use App\Http\Controllers\AuthController;
use App\Models\User;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
Route::get('/', function() {
    return view('dashboard');
})->name('dashboard');

Route::post('/login', [AuthController::class, 'login'])->name('login.process');
Route::post('/login', [AuthController::class, 'login'])->name('login.process');