<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return response()->json([
            'status' => 'success',
            'message' => 'Get all user successfully',
            'data' => [
                'users' => $users
            ]
        ]);
    }

    public function show(string $id)
    {
        $user = User::where('id', $id)->first();

        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'User not found'
            ]);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Get user successfully',
            'data' => [
                'user' => $user
            ]
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        $checkAlready = User::where('username', $validated['username'])->first();

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

        return response()->json([
            'status' => 'success',
            'message' => 'Added user successfully',
            'data' => [
                'user' => $user
            ]
        ], 201);
    }

    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'full_name' => 'required',
            'username' => 'required',
            'password' => 'required'
        ]);

        $user = User::where('id', $id)->first();

        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'User not found'
            ], 404);
        }

        $user->update([
            'full_name' => $validated['full_name'],
            'username' => $validated['username'],
            'password' => $validated['password'],
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Updated user successfully',
            'data' => [
                'user' => $user
            ]
        ]);
    }

    public function destroy(string $id)
    {
        $user = User::where('id', $id)->first();

        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'User not found'
            ], 404);
        }

        $user->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Deleted user successfully'
        ]);
    }
}
