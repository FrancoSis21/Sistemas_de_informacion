<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Modalidad extends Model
{
    use HasFactory;

    protected $table = 'modalidades';
    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'descripcion'
    ];

    public function inscripciones()
    {
        return $this->hasMany(Inscripcion::class);
    }

    public function requisitos()
    {
        return $this->hasMany(RequisitoModalidad::class);
    }
}