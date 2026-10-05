<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CandidateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return  [
            'id' => $this->id,
            'candidate_number' => $this->candidate_number,
            'full_name' => $this->full_name,
            'email' => $this->email,
            'phone_number' => $this->phone_number,
            'born_date' => $this->born_date,
            'gender' => $this->gender,
            'address' => $this->address,
            'certification_scheme' => $this->certificationScheme,
            'created_at' => $this->created_at->translatedFormat('d M Y: H:i'),
            'updated_at' => $this->updated_at->translatedFormat('d M Y: H:i')
        ];
    }
}
