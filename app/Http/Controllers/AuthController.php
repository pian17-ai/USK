<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request) {
        $validated = $request->validate([
            'full_name' => 'required',
            'username' => 'required',
            'password' => 'required|min:6'
        ]);
        
        $checkAlready = User::where('username', $validated['username'])->exists();

        if ($checkAlready) {
            return response()->json([
                'status' => 'error',
                'message' => 'Username has been used'
            ], 403);
        }

        $user = User::create([
            'full_name' => $validated['full_name'],
            'username' => $validated['username'],
            'password' => $validated['password']
        ]);

        $token = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'Register successfully',
            'data' => [
                'token' => $token,
                'user' => $user
            ]
        ]);
    }

    public function login(Request $request) {
        $validated = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        $user = User::where('username', $validated['username'])->first();

        if (!$user || !Hash::check($validated['password'], $user->password)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Wrong username or password'
            ], 401);
        }

        $token = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'Login successfully',
            'data' => [
                'token' => $token,
                'user' => $user
            ]
        ]);
    }

    public function logout(Request $request) {
        $user = $request->user();

        $user->tokens()->delete();

        return response()->json([
            'status' => 'error',
            'message' => 'Logout successfully'
        ]);
    }
}
