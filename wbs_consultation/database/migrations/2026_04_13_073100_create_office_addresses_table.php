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
        Schema::create('office_addresses', function (Blueprint $table) {
            $table->id();
            $table->string('city');
            $table->string('po_box')->nullable();
            $table->string('street')->nullable();
            $table->string('area')->nullable();
            $table->string('building')->nullable();
            $table->string('country')->default('Tanzania');
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->boolean('is_head_office')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('office_addresses');
    }
};
