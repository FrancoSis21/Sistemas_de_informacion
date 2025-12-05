<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
Rutas para usuarios => UserController 
*/

// Obtener todos los usuarios
Route::get('/users', [UserController::class, 'index']);

// Obtener un usuario por ID
Route::get('/users/{id}', [UserController::class, 'show']);

// Crear un nuevo usuario
Route::post('/users', [UserController::class, 'store']);

// Actualizar TODOS los datos de un usuario
Route::put('/users/{id}', [UserController::class, 'update']);

// Actualizar ALGUNOS datos
Route::patch('/users/{id}', [UserController::class, 'updatePartial']);

// Eliminar un usuario
Route::delete('/users/{id}', [UserController::class, 'destroy']);

