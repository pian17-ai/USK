<?php

namespace App\Http\Controllers;

use App\Models\CertificationCandidate;
use App\Models\CertificationScheme;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function registerAdm(Request $request) {
        $validated = $request->validate([
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
            'username' => $validated['username'],
            'role' => 'admin',
            'password' => $validated['password']
        ]);

        $token = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'Register successfully'
        ]);
    }

    public function register(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required',
            'password' => 'required|min:6',
            'full_name' => 'required|regex:/^[a-zA-Z ]{1,50}+$/',
            'nik' => 'required|integer|regex:/^[0-9]{16,16}+$/',
            'email' => 'required|email',
            'phone_number' => 'required|string|regex:/^[0-9]{11,13}+$/',
            'born_date' => 'required|date',
            'gender' => 'required',
            'address' => 'required',
            'certification_scheme_id' => 'nullable|exists:certification_schemes,id'
        ]);

        $checkAlready = User::where('username', $validated['username'])->exists();

        if ($checkAlready) {
            return response()->json([
                'status' => 'error',
                'message' => 'Username has been used'
            ], 403);
        }

        $user = User::create([
            'username' => $validated['username'],
            'password' => $validated['password']
        ]);

        $candidate = CertificationCandidate::create([
            'full_name' => $validated['full_name'],
            'nik' => $validated['nik'],
            'email' => $validated['email'],
            'phone_number' => $validated['phone_number'],
            'born_date' => $validated['born_date'],
            'gender' => $validated['gender'],
            'address' => $validated['address'],
            'user_id' => $user->id,
            'certification_scheme_id' => null,
        ]);

        $token = $user->createToken('auth')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'Login successfully',
            'data' => [
                'token' => $token,
                'user' => $user
            ]
        ]);
    }

    public function login(Request $request)
    {
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

    public function logout(Request $request)
    {
        $user = $request->user();

        $user->tokens()->delete();

        return response()->json([
            'status' => 'error',
            'message' => 'Logout successfully'
        ]);
    }
}
