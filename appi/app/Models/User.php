<?php

namespace App\Models;

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
