<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pago extends Model
{
    use HasFactory;

    protected $table = 'pagos';
    public $timestamps = false;

    protected $fillable = [
        'inscripcion_id',
        'monto',
        'comprobante_url',
        'estado'
    ];

    protected $casts = [
        'fecha' => 'datetime',
        'monto' => 'decimal:2'
    ];

    public function inscripcion()
    {
        return $this->belongsTo(Inscripcion::class);
    }
}