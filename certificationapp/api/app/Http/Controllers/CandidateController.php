<?php

namespace App\Http\Controllers;

use App\Http\Resources\CandidateResource;
use App\Models\CertificationCandidate;
use App\Models\CertificationScheme;
use Illuminate\Http\Request;

class CandidateController extends Controller
{
    public function index() {
        $candidates = CertificationCandidate::all();

        return response()->json([
            'status' => 'success',
            'message' => 'Get all candidate successfully',
            'data' => [
                'candidates' => CandidateResource::collection($candidates)
            ]
        ]);
    }

    public function show(Request $request, string $id) {
        $candidate = CertificationCandidate::where('id', $id)->first();

        if (!$candidate) {
            return response()->json([
                'status' => 'error',
                'message' => 'Candidate not found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Get candidate successfully',
            'data' => [
                'candidate' => new CandidateResource($candidate)
            ]
        ]);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'full_name' => 'required|regex:/^[a-zA-Z]+$/',
            'email' => 'required|email',
            'phone_number' => 'required|regex:/^[0-9]+$/',
            'born_date' => 'required|date',
            'gender' => 'required',
            'address' => 'required',
            'certification_scheme_id' => 'required|exists:certification_schemes,id'
        ]);

        $scheme = CertificationScheme::where('id', $validated['certification_scheme_id'])->first();

        $candidate = CertificationCandidate::create([
            'candidate_number' => rand(100000, 999999),
            'full_name' => $validated['full_name'],
            'email' => $validated['email'],
            'phone_number' => $validated['phone_number'],
            'born_date' => $validated['born_date'],
            'gender' => $validated['gender'],
            'address' => $validated['address'],
            'certification_scheme_id' => $validated['certification_scheme_id'],
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Added candidate successfully',
            'data' => [
                'candidate' => new CandidateResource($candidate)
            ]
        ], 201);
    }

    public function update(Request $request, string $id) {
        $validated = $request->validate([
            'full_name' => 'nullable|regex:/^[a-zA-Z]+$/',
            'email' => 'nullable|email',
            'phone_number' => 'nullable|regex:/^[0-9]+$/',
            'born_date' => 'nullable|date',
            'gender' => 'nullable',
            'address' => 'nullable',
            'certification_scheme_id' => 'nullable|exists:certification_schemes,id'
        ]);

        $candidate = CertificationCandidate::where('id', $id)->first();

        if (!$candidate) {
            return response()->json([
                'status' => 'error',
                'message' => 'Candidate not found'
            ], 404);
        }

        $candidate->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Updated candidate successfully',
            'data' => [
                'candidate' => new CandidateResource($candidate)
            ]
        ], 200);
    }

    public function destroy(string $id) {
        $candidate = CertificationCandidate::where('id', $id)->first();

        if (!$candidate) {
            return response()->json([
                'status' => 'error',
                'message' => 'Candidate not found'
            ], 404);
        }

        $candidate->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Delete Candidate successfully'
        ]);
    }
}
