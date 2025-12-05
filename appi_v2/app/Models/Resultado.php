<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resultado extends Model
{
    use HasFactory;

    protected $table = 'resultados';
    public $timestamps = false;

    protected $fillable = [
        'inscripcion_id',
        'puntaje',
        'estado'
    ];

    protected $casts = [
        'fecha' => 'datetime',
        'puntaje' => 'decimal:2'
    ];

    public function inscripcion()
    {
        return $this->belongsTo(Inscripcion::class);
    }
}