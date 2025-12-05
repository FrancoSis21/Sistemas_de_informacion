<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carrera extends Model
{
    use HasFactory;

    protected $table = 'carreras';
    public $timestamps = false;

    protected $fillable = [
        'nombre',
        'facultad'
    ];

    public function inscripciones()
    {
        return $this->hasMany(Inscripcion::class);
    }
}