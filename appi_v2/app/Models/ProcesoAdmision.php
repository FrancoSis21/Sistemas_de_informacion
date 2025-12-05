<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProcesoAdmision extends Model
{
    use HasFactory;

    protected $table = 'procesos_admision';
    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'anio',
        'fecha_inicio',
        'fecha_fin'
    ];

    protected $casts = [
        'fecha_inicio' => 'date',
        'fecha_fin' => 'date',
    ];

    public function inscripciones()
    {
        return $this->hasMany(Inscripcion::class, 'proceso_id');
    }
}