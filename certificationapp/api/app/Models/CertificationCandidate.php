<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'candidate_number',
    'nik',
    'full_name',
    'email',
    'phone_number',
    'born_date',
    'gender',
    'address',
    'user_id',
    'certification_scheme_id'
])]
class CertificationCandidate extends Model
{
    public function certificationScheme()
    {
        return $this->belongsTo(CertificationScheme::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected $casts = [
        'created_at' => 'datetime: d M Y: H:i',
        'updated_at' => 'datetime: d M Y: H:i'
    ];
}
