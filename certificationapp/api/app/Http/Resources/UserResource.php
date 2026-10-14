<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'user' => [
                'username' => $this->username,
                'role' => $this->role,
            ],
            'candidate' => [

                'nik' => $this->certificationCandidate->nik,
                'full_name' => $this->certificationCandidate->full_name,
                'email' => $this->certificationCandidate->email,
                'phone_number' => $this->certificationCandidate->phone_number,
                'born_date' => $this->certificationCandidate->born_date,
                'gender' => $this->certificationCandidate->gender,
                'address' => $this->certificationCandidate->address,
                'certification_scheme' => $this->certificationCandidate->certificationScheme,
            ]
        ];
    }
}
