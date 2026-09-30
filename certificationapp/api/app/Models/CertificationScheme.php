<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
    'scheme_code',
    'scheme_name',
    'description'
])]
class CertificationScheme extends Model
{
    public function certificationCandidate() {
        return $this->hasMany(CertificationCandidate::class);
    }
}
