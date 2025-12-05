<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscripcion extends Model
{
    use HasFactory;

    protected $table = 'inscripciones';

    protected $fillable = [
        'usuario_id',
        'proceso_id',
        'modalidad_id',
        'carrera_id',
        'estado'
    ];

    protected $casts = [
        'fecha_inscripcion' => 'datetime',
    ];

    public $timestamps = false;

    // Relaciones
    public function usuario()
    {
        return $this->belongsTo(Usuario::class);
    }

    public function proceso()
    {
        return $this->belongsTo(ProcesoAdmision::class, 'proceso_id');
    }

    public function modalidad()
    {
        return $this->belongsTo(Modalidad::class);
    }

    public function carrera()
    {
        return $this->belongsTo(Carrera::class);
    }

    public function documentos()
    {
        return $this->hasMany(DocumentoUsuario::class);
    }

    public function pago()
    {
        return $this->hasOne(Pago::class);
    }

    public function asignacionAula()
    {
        return $this->hasOne(AsignacionAula::class);
    }

    public function resultado()
    {
        return $this->hasOne(Resultado::class);
    }
}
