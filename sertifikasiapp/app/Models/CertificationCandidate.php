<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'candidate_number',
    'full_name',
    'email',
    'phone_number',
    'born_date',
    'gender',
    'address',
    'scheme_id',
    'status'
])]
class CertificationCandidate extends Model
{
    public function certificationScheme() {
        return $this->belongsTo(CertificationScheme::class);
    }
}
