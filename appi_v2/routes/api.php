<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UsuarioController;
use App\Http\Controllers\Api\CarreraController;
use App\Http\Controllers\Api\ModalidadController;
use App\Http\Controllers\Api\InscripcionController;
use App\Http\Controllers\Api\PagoController;
use App\Http\Controllers\Api\ProcesoAdmisionController;
use App\Http\Controllers\Api\SedeController;
use App\Http\Controllers\Api\AulaController;
use App\Http\Controllers\Api\ResultadoController;
use App\Http\Controllers\Api\DocumentoUsuarioController;
use App\Http\Controllers\Api\TipoDocumentoController;
use App\Http\Controllers\Api\RolController;
use App\Http\Controllers\Api\ConfiguracionController;
use App\Http\Controllers\Api\TipoBeneficioController;
use App\Http\Controllers\Api\UsuarioBeneficioController;
use App\Http\Controllers\Api\TicketSoporteController;
use App\Http\Controllers\Api\DireccionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::middleware('api')->group(function () {
    
    // Usuarios
    Route::apiResource('usuarios', UsuarioController::class);
    Route::get('usuarios/{id}/inscripciones', [UsuarioController::class, 'inscripciones']);
    Route::get('usuarios/{id}/beneficios', [UsuarioController::class, 'beneficios']);
    
    // Carreras
    Route::apiResource('carreras', CarreraController::class);
    Route::get('carreras/facultad/{facultad}', [CarreraController::class, 'porFacultad']);
    
    // Modalidades
    Route::apiResource('modalidades', ModalidadController::class);
    Route::get('modalidades/{id}/requisitos', [ModalidadController::class, 'requisitos']);
    
    // Inscripciones
    Route::apiResource('inscripciones', InscripcionController::class);
    Route::get('inscripciones/{id}/documentos', [InscripcionController::class, 'documentos']);
    Route::get('inscripciones/{id}/pagos', [InscripcionController::class, 'pagos']);
    Route::get('inscripciones/{id}/resultado', [InscripcionController::class, 'resultado']);
    Route::patch('inscripciones/{id}/estado', [InscripcionController::class, 'actualizarEstado']);
    
    // Pagos
    Route::apiResource('pagos', PagoController::class);
    Route::patch('pagos/{id}/estado', [PagoController::class, 'actualizarEstado']);
    
    // Procesos de Admisión
    Route::apiResource('procesos-admision', ProcesoAdmisionController::class);
    Route::get('procesos-admision/{id}/inscripciones', [ProcesoAdmisionController::class, 'inscripciones']);
    Route::get('procesos-admision/{id}/estadisticas', [ProcesoAdmisionController::class, 'estadisticas']);
    
    // Sedes
    Route::apiResource('sedes', SedeController::class);
    Route::get('sedes/{id}/aulas', [SedeController::class, 'aulas']);
    
    // Aulas
    Route::apiResource('aulas', AulaController::class);
    Route::get('aulas/{id}/asignaciones', [AulaController::class, 'asignaciones']);
    
    // Resultados
    Route::apiResource('resultados', ResultadoController::class);
    Route::get('resultados/proceso/{procesoId}', [ResultadoController::class, 'porProceso']);
    Route::get('resultados/carrera/{carreraId}', [ResultadoController::class, 'porCarrera']);
    
    // Documentos de Usuario
    Route::apiResource('documentos-usuario', DocumentoUsuarioController::class);
    Route::patch('documentos-usuario/{id}/estado', [DocumentoUsuarioController::class, 'actualizarEstado']);
    
    // Tipos de Documento
    Route::apiResource('tipos-documento', TipoDocumentoController::class);
    
    // Roles
    Route::apiResource('roles', RolController::class);
    
    // Configuración
    Route::apiResource('configuracion', ConfiguracionController::class);
    Route::get('configuracion/clave/{clave}', [ConfiguracionController::class, 'porClave']);
    
    // Tipos de Beneficio
    Route::apiResource('tipos-beneficio', TipoBeneficioController::class);
    
    // Usuario Beneficio
    Route::apiResource('usuarios-beneficio', UsuarioBeneficioController::class);
    Route::patch('usuarios-beneficio/{id}/estado', [UsuarioBeneficioController::class, 'actualizarEstado']);
    
    // Tickets de Soporte
    Route::apiResource('tickets-soporte', TicketSoporteController::class);
    Route::patch('tickets-soporte/{id}/cerrar', [TicketSoporteController::class, 'cerrar']);
    
    // Direcciones
    Route::apiResource('direcciones', DireccionController::class);
    Route::get('direcciones/usuario/{usuarioId}', [DireccionController::class, 'porUsuario']);
    
    // Rutas adicionales útiles
    Route::get('estadisticas/general', [ProcesoAdmisionController::class, 'estadisticasGenerales']);
    Route::get('reportes/inscripciones', [InscripcionController::class, 'reporte']);
    Route::get('reportes/ingresantes/{procesoId}', [ResultadoController::class, 'reporteIngresantes']);
});