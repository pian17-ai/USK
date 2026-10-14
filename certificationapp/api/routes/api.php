<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\SchemeController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::prefix('/v1')->group(function () {
    Route::prefix('/auth')->group(function () {
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/register/Adm', [AuthController::class, 'registerAdm']);
        Route::post('/login', [AuthController::class, 'login']);
        Route::middleware('auth:sanctum')->group(function () {
            Route::post('/logout', [AuthController::class, 'logout']);
        });
    });

    Route::middleware('auth:sanctum', 'admin')->group(function () {
        Route::get('/candidates', [CandidateController::class, 'index']);
        Route::post('/candidates', [CandidateController::class, 'store']);
        Route::put('/candidates/{id}', [CandidateController::class, 'update']);
        Route::delete('/candidates/{id}', [CandidateController::class, 'destroy']);

        Route::post('/schemes', [SchemeController::class, 'store']);
        Route::put('/schemes/{id}', [SchemeController::class, 'update']);
        Route::delete('/schemes/{id}', [SchemeController::class, 'destroy']);

        Route::get('/users', [UserController::class, 'index']);
        Route::post('/users', [UserController::class, 'store']);
        Route::put('/users/{id}', [UserController::class, 'update']);
        Route::delete('/users/{id}', [UserController::class, 'destroy']);
    });

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/users/{id}', [UserController::class, 'show']);
        Route::get('/candidates/{id}', [CandidateController::class, 'show']);
        Route::put('/schemes/apply/{id}', [SchemeController::class, 'apply_scheme']);
        Route::put('/candidates/update/{username}', [CandidateController::class, 'update_profile']);
    });

    Route::get('/schemes/{id}', [SchemeController::class, 'show']);
    Route::get('/schemes', [SchemeController::class, 'index']);
});
