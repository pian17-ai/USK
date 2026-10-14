<?php

namespace App\Http\Controllers;

use App\Http\Resources\CandidateResource;
use App\Models\CertificationCandidate;
use App\Models\CertificationScheme;
use Illuminate\Http\Request;

class CandidateController extends Controller
{
    public function index()
    {
        $candidates = CertificationCandidate::all();

        return response()->json([
            'status' => 'success',
            'message' => 'Get all candidate successfully',
            'data' => [
                'candidates' => CandidateResource::collection($candidates)
            ]
        ]);
    }

    public function show(string $id)
    {
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

    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required|regex:/^[a-zA-Z ]{1,50}+$/',
            'nik' => 'required|integer|regex:/^[0-9]{16,16}+$/',
            'email' => 'required|email',
            'phone_number' => 'required|integer|regex:/^[0-9]{11,13}+$/',
            'born_date' => 'required|date',
            'gender' => 'required',
            'address' => 'required',
            'user_id' => 'required|exists:users,id',
            'certification_scheme_id' => 'nullable|exists:certification_schemes,id'
        ]);

        if ($validated['certification_scheme_id'] !== null) {
            $scheme = CertificationScheme::where('id', $validated['certification_scheme_id'])->first();

            if (!$scheme) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Certification Scheme not found'
                ], 404);
            }
        }


        $candidate = CertificationCandidate::create([
            'full_name' => $validated['full_name'],
            'nik' => $validated['nik'],
            'email' => $validated['email'],
            'phone_number' => $validated['phone_number'],
            'born_date' => $validated['born_date'],
            'gender' => $validated['gender'],
            'address' => $validated['address'],
            'user_id' => $validated['user_id'],
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

    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'full_name' => 'nullable|regex:/^[a-zA-Z ]{1,50}+$/',
            'nik' => 'nullable|integer|regex:/^[0-9]{16,16}+$/',
            'email' => 'nullable|email',
            'phone_number' => 'nullable|integer|regex:/^[0-9]{11,13}+$/',
            'born_date' => 'nullable|date',
            'gender' => 'nullable',
            'address' => 'nullable',
            'user_id' => 'nullable|exists:users,id',
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

    public function destroy(string $id)
    {
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

    public function update_profile(Request $request, string $username)
    {
        $validated = $request->validate([
            'username' => 'nullable|string|regex:/^[a-zA-Z ]{1,50}+$/',
            'full_name' => 'nullable|regex:/^[a-zA-Z ]{1,50}+$/',
            'nik' => 'nullable|integer|regex:/^[0-9]{16,16}+$/',
            'email' => 'nullable|email',
            'phone_number' => 'nullable|integer|regex:/^[0-9]{11,13}+$/',
            'born_date' => 'nullable|date',
            'gender' => 'nullable',
            'address' => 'nullable'
        ]);

        $user = $request->user();

        if ($user->username !== $username) {
            return response()->json([
                'status' => 'error',
                'message' => 'Access forbidden'
            ], 403);
        }

        $candidate = CertificationCandidate::where('user_id', $user->id)->first();

        $user->update([
            'username' => $validated['username']
        ]);

        $candidate->update([
            'full_name' => $validated['full_name'],
            'nik' => $validated['nik'],
            'email' => $validated['email'],
            'phone_number' => $validated['phone_number'],
            'born_date' => $validated['born_date'],
            'gender' => $validated['gender'],
            'address' => $validated['address']
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Update data successfully'
        ]);
    }
}
