<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('certification_candidates', function (Blueprint $table) {
            $table->id();
            $table->string('candidate_number');
            $table->string('full_name');
            $table->string('email');
            $table->string('phone_number');
            $table->date('born_date');
            $table->enum('gender', ['male', 'female']);
            $table->text('address');
            $table->foreignId('certification_scheme_id')->constrained('certification_schemes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('certification_candidates');
    }
};
