<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * GET /users
     * Devuelve todos los usuarios
     */
    public function index()
    {
        $usuarios = User::all();

        return response()->json([
            'status' => true,
            'total'  => $usuarios->count(),
            'data'   => $usuarios
        ], 200);
    }

    /**
     * GET /users/{id}
     * Devuelve un usuario por su ID
     */
    public function show($id)
    {
        $usuario = User::find($id);

        if (!$usuario) {
            return response()->json([
                'status' => false,
                'message' => 'Usuario no encontrado'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'data' => $usuario
        ], 200);
    }

    /**
     * POST /users
     * Crea un nuevo usuario
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombres'   => 'required|string|max:100',
            'apellidos' => 'required|string|max:100',
            'dni'       => 'required|string|max:15|unique:usuarios,dni',
            'correo'    => 'required|email|max:120|unique:usuarios,correo',
            'telefono'  => 'nullable|string|max:20',
            'password'  => 'required|string|min:6',
            'tipo_documento_id' => 'nullable|integer',
            'rol_id'    => 'nullable|integer',
        ]);

        $usuario = User::create([
            'tipo_documento_id' => $request->tipo_documento_id ?? 1,
            'nombres'           => $request->nombres,
            'apellidos'         => $request->apellidos,
            'dni'               => $request->dni,
            'correo'            => $request->correo,
            'telefono'          => $request->telefono,
            'password'          => Hash::make($request->password),
            'rol_id'            => $request->rol_id ?? 1,
        ]);

        return response()->json([
            'status'  => true,
            'message' => 'Usuario creado correctamente',
            'data'    => $usuario
        ], 201);
    }

    /**
     * PUT /users/{id}
     * Actualiza TODO el usuario
     */
    public function update(Request $request, $id)
    {
        $usuario = User::find($id);

        if (!$usuario) {
            return response()->json([
                'status' => false,
                'message' => 'Usuario no encontrado'
            ], 404);
        }

        $request->validate([
            'tipo_documento_id' => 'required|integer',
            'nombres'           => 'required|string|max:100',
            'apellidos'         => 'required|string|max:100',
            'dni'               => "required|string|max:15|unique:usuarios,dni,$id",
            'correo'            => "required|email|max:120|unique:usuarios,correo,$id",
            'telefono'          => 'nullable|string|max:20',
            'rol_id'            => 'required|integer',
            'password'          => 'nullable|string|min:6',
        ]);

        $usuario->update([
            'tipo_documento_id' => $request->tipo_documento_id,
            'nombres'           => $request->nombres,
            'apellidos'         => $request->apellidos,
            'dni'               => $request->dni,
            'correo'            => $request->correo,
            'telefono'          => $request->telefono,
            'rol_id'            => $request->rol_id,
            'password'          => $request->filled('password') ? Hash::make($request->password) : $usuario->password,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Usuario actualizado correctamente',
            'data' => $usuario
        ], 200);
    }

    /**
     * PATCH /users/{id}
     * Actualiza solo campos enviados
     */
    public function updatePartial(Request $request, $id)
    {
        $usuario = User::find($id);

        if (!$usuario) {
            return response()->json([
                'status' => false,
                'message' => 'Usuario no encontrado'
            ], 404);
        }

        if ($request->has('password')) {
            $request->merge([
                'password' => Hash::make($request->password)
            ]);
        }

        $usuario->update($request->only([
            'tipo_documento_id',
            'nombres',
            'apellidos',
            'dni',
            'correo',
            'telefono',
            'rol_id',
            'password'
        ]));

        return response()->json([
            'status' => true,
            'message' => 'Usuario actualizado parcialmente',
            'data' => $usuario
        ], 200);
    }

    /**
     * DELETE /users/{id}
     * Elimina un usuario
     */
    public function destroy($id)
    {
        $usuario = User::find($id);

        if (!$usuario) {
            return response()->json([
                'status' => false,
                'message' => 'Usuario no encontrado'
            ], 404);
        }

        $usuario->delete();

        return response()->json([
            'status' => true,
            'message' => 'Usuario eliminado correctamente'
        ], 200);
    }
}
