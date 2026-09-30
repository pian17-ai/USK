<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request) {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:6' 
        ]);

        User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password'])
        ]);

        $messages = 'Registration successfully';

        return redirect()->route('login')->with('success', $messages);
    }

    public function login(Request $request) {
        $validated = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        $user = User::where('email', $validated['email'])->first();

        if (!$user || Hash::check($validated['password'], $user->password)) {
            return back()->withErrors([
                'messages' => 'Wrong email or password'
            ]);
        }

        Auth::login($user);

        return redirect()->route('dashboard');
    }

    public function logout() {

    }

    public function showLogin() {
        return view('auth.login');
    }

    public function showRegister() {
        return view('auth.register');
    }
}
