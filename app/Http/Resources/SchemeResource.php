<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SchemeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'scheme_code' => $this->scheme_code,
            'scheme_name' => $this->scheme_name,
            'description' => $this->description,
            'candidate_count' => $this->certificationCandidate()->count(),
            'created_at' => $this->created_at->translatedFormat('d M Y: H:i')
        ];
    }
}
