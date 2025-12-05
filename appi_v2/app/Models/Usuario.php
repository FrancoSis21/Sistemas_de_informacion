<?php

/*namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'usuarios';

    protected $fillable = [
        'tipo_documento_id',
        'nombres',
        'apellidos',
        'dni',
        'correo',
        'telefono',
        'password', // actualizado
        'rol_id'
    ];

    // protected $hidden = [
    //     'password', // actualizado
    // ];

    // Para autenticación
    public function getAuthPassword()
    {
        return $this->password;
    }

    // Mutator para encriptar password automáticamente
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }
}
*/

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'usuarios';

    protected $fillable = [
        'tipo_documento_id',
        'nombres',
        'apellidos',
        'dni',
        'correo',
        'telefono',
        'password',
        'rol_id'
    ];

    protected $hidden = [
        'password',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Relaciones
    public function tipoDocumento()
    {
        return $this->belongsTo(TipoDocumento::class);
    }

    public function rol()
    {
        return $this->belongsTo(Rol::class);
    }

    public function direcciones()
    {
        return $this->hasMany(Direccion::class);
    }

    public function inscripciones()
    {
        return $this->hasMany(Inscripcion::class);
    }

    public function beneficios()
    {
        return $this->hasMany(UsuarioBeneficio::class);
    }

    public function ticketsSoporte()
    {
        return $this->hasMany(TicketSoporte::class);
    }
}