<?php

namespace App\Http\Controllers;

use App\Models\CertificationScheme;
use Illuminate\Http\Request;

class SchemeController extends Controller
{
    public function index() {
        $schemes = CertificationScheme::all();
        
        return response()->json([
            'status' => 'success',
            'message' => 'Get all scheme successfully',
            'data' => [
                'candidates' => $schemes
            ]
        ]);
    }

    public function show(string $id) {
        $scheme = CertificationScheme::where('id', $id)->first();

        if (!$scheme) {
            return response()->json([
                'status' => 'error',
                'message' => 'Scheme not found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Get scheme successfully',
            'data' => [
                'scheme' => $scheme
            ]
        ]);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'scheme_code' => 'required',
            'scheme_name' => 'required',
            'description' => 'required'
        ]);

        $scheme = CertificationScheme::create([
            'scheme_code' => $validated['scheme_code'],
            'scheme_name' => $validated['scheme_name'],
            'description' => $validated['description'],
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Added scheme successfully',
            'data' => [
                'scheme' => $scheme
            ]
        ], 201);
    }

    public function update(Request $request, string $id) {
        $validated = $request->validate([
            'scheme_code' => 'nullable',
            'scheme_name' => 'nullable',
            'description' => 'nullable'
        ]);

        $scheme = CertificationScheme::where('id', $id)->first();

        if (!$scheme) {
            return response()->json([
                'status' => 'error',
                'message' => 'Scheme not found'
            ], 404);
        }

        $scheme->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Updated scheme successfully',
            'data' => [
                'scheme' => $scheme
            ]
        ], 200);
    }

    public function destroy(string $id) {
        $scheme = CertificationScheme::where('id', $id)->first();

        if (!$scheme) {
            return response()->json([
                'status' => 'error',
                'message' => 'Scheme not found'
            ], 404);
        }

        $scheme->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Delete scheme successfully'
        ]);
    }
}
