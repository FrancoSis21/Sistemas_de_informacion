/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS `bd_admission` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bd_admission`;

CREATE TABLE IF NOT EXISTS `asignacion_aula` (
  `id` int NOT NULL AUTO_INCREMENT,
  `inscripcion_id` int NOT NULL,
  `aula_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `inscripcion_id` (`inscripcion_id`),
  KEY `aula_id` (`aula_id`),
  CONSTRAINT `asignacion_aula_ibfk_1` FOREIGN KEY (`inscripcion_id`) REFERENCES `inscripciones` (`id`),
  CONSTRAINT `asignacion_aula_ibfk_2` FOREIGN KEY (`aula_id`) REFERENCES `aulas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `asignacion_aula` (`id`, `inscripcion_id`, `aula_id`) VALUES
	(1, 1, 1),
	(2, 2, 1),
	(3, 3, 2),
	(4, 4, 2),
	(5, 5, 3),
	(6, 6, 3),
	(7, 7, 4),
	(8, 8, 4),
	(9, 9, 5),
	(10, 10, 5),
	(11, 11, 7),
	(12, 12, 7),
	(13, 13, 8),
	(14, 14, 8),
	(15, 15, 9),
	(16, 16, 10),
	(17, 17, 11),
	(18, 18, 11),
	(19, 19, 12),
	(20, 20, 12);

CREATE TABLE IF NOT EXISTS `aulas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sede_id` int NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `capacidad` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sede_id` (`sede_id`),
  CONSTRAINT `aulas_ibfk_1` FOREIGN KEY (`sede_id`) REFERENCES `sedes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `aulas` (`id`, `sede_id`, `nombre`, `capacidad`) VALUES
	(1, 1, 'Aula Magna A', 50),
	(2, 1, 'Aula Magna B', 50),
	(3, 1, 'Aula 101 - Pabellón A', 40),
	(4, 1, 'Aula 102 - Pabellón A', 40),
	(5, 1, 'Aula 201 - Pabellón B', 35),
	(6, 1, 'Aula 202 - Pabellón B', 35),
	(7, 2, 'Aula 01', 45),
	(8, 2, 'Aula 02', 45),
	(9, 2, 'Aula 03', 40),
	(10, 3, 'Aula A1', 30),
	(11, 3, 'Aula A2', 30),
	(12, 3, 'Aula B1', 35);

CREATE TABLE IF NOT EXISTS `carreras` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(120) COLLATE utf8mb4_general_ci NOT NULL,
  `facultad` varchar(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `carreras` (`id`, `nombre`, `facultad`) VALUES
	(1, 'Ingeniería Civil', 'Facultad de Ingenierías'),
	(2, 'Ingeniería de Sistemas', 'Facultad de Ingenierías'),
	(3, 'Ingeniería Industrial', 'Facultad de Ingenierías'),
	(4, 'Ingeniería Mecánica Eléctrica', 'Facultad de Ingenierías'),
	(5, 'Ingeniería Electrónica', 'Facultad de Ingenierías'),
	(6, 'Medicina Humana', 'Facultad de Ciencias de la Salud'),
	(7, 'Enfermería', 'Facultad de Ciencias de la Salud'),
	(8, 'Odontología', 'Facultad de Ciencias de la Salud'),
	(9, 'Nutrición Humana', 'Facultad de Ciencias de la Salud'),
	(10, 'Derecho', 'Facultad de Ciencias Jurídicas y Políticas'),
	(11, 'Contabilidad', 'Facultad de Ciencias Contables y Administrativas'),
	(12, 'Administración', 'Facultad de Ciencias Contables y Administrativas'),
	(13, 'Turismo', 'Facultad de Ciencias Sociales'),
	(14, 'Trabajo Social', 'Facultad de Ciencias Sociales'),
	(15, 'Educación Inicial', 'Facultad de Ciencias de la Educación'),
	(16, 'Educación Primaria', 'Facultad de Ciencias de la Educación'),
	(17, 'Educación Secundaria', 'Facultad de Ciencias de la Educación'),
	(18, 'Biología', 'Facultad de Ciencias Biológicas'),
	(19, 'Matemática', 'Facultad de Ciencias'),
	(20, 'Física', 'Facultad de Ciencias');

CREATE TABLE IF NOT EXISTS `configuracion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `clave` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `valor` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`),
  UNIQUE KEY `clave` (`clave`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `configuracion` (`id`, `clave`, `valor`) VALUES
	(1, 'nombre_universidad', 'Universidad Nacional del Altiplano'),
	(2, 'costo_examen_ordinario', '350'),
	(3, 'costo_examen_especial', '175'),
	(4, 'email_contacto', 'admision@unap.edu.pe'),
	(5, 'telefono_admision', '051-365461'),
	(6, 'fecha_examen_2025_1', '2025-03-15'),
	(7, 'vacantes_totales_2025_1', '2500'),
	(8, 'porcentaje_nota_minima', '60'),
	(9, 'habilitado_inscripciones', 'true'),
	(10, 'mensaje_bienvenida', 'Bienvenido al Sistema de Admisión de la UNA Puno');

CREATE TABLE IF NOT EXISTS `direcciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `distrito_id` int NOT NULL,
  `direccion_exacta` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `referencia` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `codigo_postal` varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `direcciones_usuario_fk` (`usuario_id`),
  KEY `direcciones_distrito_fk` (`distrito_id`),
  CONSTRAINT `direcciones_distrito_fk` FOREIGN KEY (`distrito_id`) REFERENCES `distritos` (`id`),
  CONSTRAINT `direcciones_usuario_fk` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `direcciones` (`id`, `usuario_id`, `distrito_id`, `direccion_exacta`, `referencia`, `codigo_postal`, `created_at`, `updated_at`) VALUES
	(1, 1, 1, 'Av Proceres 1234', NULL, NULL, '2025-12-05 15:44:09', '2025-12-05 15:44:09');

CREATE TABLE IF NOT EXISTS `distritos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `provincia_id` int NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_distrito` (`provincia_id`,`nombre`),
  CONSTRAINT `distritos_provincia_fk` FOREIGN KEY (`provincia_id`) REFERENCES `provincias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `distritos` (`id`, `provincia_id`, `nombre`) VALUES
	(1, 1, 'San Juan de Lurigancho');

CREATE TABLE IF NOT EXISTS `documentos_beneficio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `beneficio_id` int NOT NULL,
  `nombre_documento` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `url_archivo` text COLLATE utf8mb4_general_ci NOT NULL,
  `fecha_subida` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` varchar(30) COLLATE utf8mb4_general_ci DEFAULT 'pendiente',
  `observaciones` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`),
  KEY `beneficio_id` (`beneficio_id`),
  CONSTRAINT `documentos_beneficio_ibfk_1` FOREIGN KEY (`beneficio_id`) REFERENCES `usuario_beneficio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `documentos_beneficio` (`id`, `beneficio_id`, `nombre_documento`, `url_archivo`, `fecha_subida`, `estado`, `observaciones`) VALUES
	(1, 1, 'Certificado CONADIS', '/uploads/beneficios/conadis_71234567.pdf', '2025-11-25 21:32:39', 'aprobado', NULL),
	(2, 2, 'Constancia Comunidad', '/uploads/beneficios/comunidad_77234567.pdf', '2025-11-25 21:32:39', 'pendiente', NULL),
	(3, 3, 'Constancia SISFOH', '/uploads/beneficios/sisfoh_74567890.pdf', '2025-11-25 21:32:39', 'aprobado', NULL),
	(4, 4, 'Resolución IPD', '/uploads/beneficios/ipd_78901234.pdf', '2025-11-25 21:32:39', 'verificando', NULL);

CREATE TABLE IF NOT EXISTS `documentos_usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `inscripcion_id` int NOT NULL,
  `tipo` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `url_archivo` text COLLATE utf8mb4_general_ci NOT NULL,
  `fecha_subida` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` varchar(30) COLLATE utf8mb4_general_ci DEFAULT 'pendiente',
  `observaciones` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`),
  KEY `inscripcion_id` (`inscripcion_id`),
  CONSTRAINT `documentos_usuario_ibfk_1` FOREIGN KEY (`inscripcion_id`) REFERENCES `inscripciones` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `documentos_usuario` (`id`, `inscripcion_id`, `tipo`, `url_archivo`, `fecha_subida`, `estado`, `observaciones`) VALUES
	(1, 1, 'DNI', '/uploads/docs/dni_72345678.pdf', '2025-11-25 21:32:39', 'aprobado', NULL),
	(2, 1, 'Certificado de Estudios', '/uploads/docs/cert_72345678.pdf', '2025-11-25 21:32:39', 'aprobado', NULL),
	(3, 1, 'Fotografía', '/uploads/docs/foto_72345678.jpg', '2025-11-25 21:32:39', 'aprobado', NULL),
	(4, 2, 'DNI', '/uploads/docs/dni_73456789.pdf', '2025-11-25 21:32:39', 'pendiente', NULL),
	(5, 2, 'Certificado de Estudios', '/uploads/docs/cert_73456789.pdf', '2025-11-25 21:32:39', 'pendiente', NULL),
	(6, 3, 'DNI', '/uploads/docs/dni_74567890.pdf', '2025-11-25 21:32:39', 'aprobado', NULL),
	(7, 3, 'Certificado Primer Puesto', '/uploads/docs/primerpuesto_74567890.pdf', '2025-11-25 21:32:39', 'verificando', 'Verificar firma del director'),
	(8, 4, 'DNI', '/uploads/docs/dni_75678901.pdf', '2025-11-25 21:32:39', 'aprobado', NULL),
	(9, 4, 'Certificado de Estudios', '/uploads/docs/cert_75678901.pdf', '2025-11-25 21:32:39', 'aprobado', NULL),
	(10, 5, 'DNI', '/uploads/docs/dni_76789012.pdf', '2025-11-25 21:32:39', 'rechazado', 'DNI ilegible, solicitar nueva copia'),
	(11, 6, 'DNI', '/uploads/docs/dni_77890123.pdf', '2025-11-25 21:32:39', 'aprobado', NULL),
	(12, 6, 'Certificado de Estudios', '/uploads/docs/cert_77890123.pdf', '2025-11-25 21:32:39', 'aprobado', NULL),
	(13, 7, 'DNI', '/uploads/docs/dni_78901234.pdf', '2025-11-25 21:32:39', 'aprobado', NULL),
	(14, 7, 'Resolución IPD', '/uploads/docs/ipd_78901234.pdf', '2025-11-25 21:32:39', 'verificando', 'Pendiente validación con IPD'),
	(15, 8, 'DNI', '/uploads/docs/dni_79012345.pdf', '2025-11-25 21:32:39', 'pendiente', NULL),
	(16, 9, 'DNI', '/uploads/docs/dni_70123456.pdf', '2025-11-25 21:32:39', 'aprobado', NULL),
	(17, 9, 'Certificado de Estudios', '/uploads/docs/cert_70123456.pdf', '2025-11-25 21:32:39', 'aprobado', NULL),
	(18, 10, 'DNI', '/uploads/docs/dni_71234567.pdf', '2025-11-25 21:32:39', 'aprobado', NULL),
	(19, 10, 'Certificado CONADIS', '/uploads/docs/conadis_71234567.pdf', '2025-11-25 21:32:39', 'verificando', 'En proceso de validación'),
	(20, 11, 'DNI', '/uploads/docs/dni_72234567.pdf', '2025-11-25 21:32:39', 'pendiente', NULL),
	(21, 12, 'DNI', '/uploads/docs/dni_73234567.pdf', '2025-11-25 21:32:39', 'pendiente', NULL);

CREATE TABLE IF NOT EXISTS `inscripciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `proceso_id` int NOT NULL,
  `modalidad_id` int NOT NULL,
  `carrera_id` int NOT NULL,
  `fecha_inscripcion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` varchar(30) COLLATE utf8mb4_general_ci DEFAULT 'pendiente',
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `proceso_id` (`proceso_id`),
  KEY `modalidad_id` (`modalidad_id`),
  KEY `carrera_id` (`carrera_id`),
  CONSTRAINT `inscripciones_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `inscripciones_ibfk_2` FOREIGN KEY (`proceso_id`) REFERENCES `procesos_admision` (`id`),
  CONSTRAINT `inscripciones_ibfk_3` FOREIGN KEY (`modalidad_id`) REFERENCES `modalidades` (`id`),
  CONSTRAINT `inscripciones_ibfk_4` FOREIGN KEY (`carrera_id`) REFERENCES `carreras` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `inscripciones` (`id`, `usuario_id`, `proceso_id`, `modalidad_id`, `carrera_id`, `fecha_inscripcion`, `estado`) VALUES
	(1, 1, 2, 1, 2, '2025-11-25 21:32:39', 'aprobado'),
	(2, 2, 2, 1, 7, '2025-11-25 21:32:39', 'pendiente'),
	(3, 3, 2, 3, 1, '2025-11-25 21:32:39', 'verificando'),
	(4, 4, 2, 1, 11, '2025-11-25 21:32:39', 'aprobado'),
	(5, 5, 2, 2, 12, '2025-11-25 21:32:39', 'rechazado'),
	(6, 6, 2, 1, 15, '2025-11-25 21:32:39', 'aprobado'),
	(7, 7, 2, 4, 3, '2025-11-25 21:32:39', 'verificando'),
	(8, 8, 2, 1, 6, '2025-11-25 21:32:39', 'pendiente'),
	(9, 9, 2, 1, 10, '2025-11-25 21:32:39', 'aprobado'),
	(10, 10, 2, 5, 13, '2025-11-25 21:32:39', 'verificando'),
	(11, 11, 3, 1, 2, '2025-11-25 21:32:39', 'pendiente'),
	(12, 12, 3, 1, 8, '2025-11-25 21:32:39', 'pendiente'),
	(13, 13, 3, 3, 4, '2025-11-25 21:32:39', 'verificando'),
	(14, 14, 3, 1, 14, '2025-11-25 21:32:39', 'pendiente'),
	(15, 15, 3, 1, 1, '2025-11-25 21:32:39', 'aprobado'),
	(16, 16, 3, 7, 16, '2025-11-25 21:32:39', 'verificando'),
	(17, 17, 3, 1, 5, '2025-11-25 21:32:39', 'pendiente'),
	(18, 18, 3, 1, 9, '2025-11-25 21:32:39', 'pendiente'),
	(19, 19, 3, 8, 2, '2025-11-25 21:32:39', 'verificando'),
	(20, 20, 3, 1, 11, '2025-11-25 21:32:39', 'pendiente');

CREATE TABLE IF NOT EXISTS `modalidades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `modalidades` (`id`, `nombre`, `descripcion`) VALUES
	(1, 'Ordinario', 'Modalidad general para todos los usuarios que culminaron educación secundaria'),
	(2, 'Centro Pre Universitario', 'Para egresados del centro pre universitario de la institución'),
	(3, 'Primeros Puestos', 'Para los dos primeros puestos de instituciones educativas públicas y privadas'),
	(4, 'Deportistas Destacados', 'Para deportistas calificados de alto nivel'),
	(5, 'Personas con Discapacidad', 'Cuota especial para personas con discapacidad'),
	(6, 'Víctimas del Terrorismo', 'Para hijos de víctimas del terrorismo'),
	(7, 'Comunidades Nativas', 'Para miembros de comunidades nativas y campesinas'),
	(8, 'Traslado Externo', 'Para estudiantes universitarios de otras instituciones');

CREATE TABLE IF NOT EXISTS `pagos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `inscripcion_id` int NOT NULL,
  `monto` decimal(10,2) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `comprobante_url` text COLLATE utf8mb4_general_ci,
  `estado` varchar(30) COLLATE utf8mb4_general_ci DEFAULT 'pendiente',
  PRIMARY KEY (`id`),
  KEY `inscripcion_id` (`inscripcion_id`),
  CONSTRAINT `pagos_ibfk_1` FOREIGN KEY (`inscripcion_id`) REFERENCES `inscripciones` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `pagos` (`id`, `inscripcion_id`, `monto`, `fecha`, `comprobante_url`, `estado`) VALUES
	(1, 1, 350.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_001.pdf', 'aprobado'),
	(2, 2, 350.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_002.pdf', 'pendiente'),
	(3, 3, 175.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_003.pdf', 'aprobado'),
	(4, 4, 350.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_004.pdf', 'aprobado'),
	(5, 5, 350.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_005.pdf', 'aprobado'),
	(6, 6, 350.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_006.pdf', 'aprobado'),
	(7, 7, 175.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_007.pdf', 'verificando'),
	(8, 8, 350.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_008.pdf', 'pendiente'),
	(9, 9, 350.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_009.pdf', 'aprobado'),
	(10, 10, 0.00, '2025-11-25 21:32:39', NULL, 'exonerado'),
	(11, 11, 350.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_011.pdf', 'pendiente'),
	(12, 12, 350.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_012.pdf', 'pendiente'),
	(13, 13, 175.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_013.pdf', 'verificando'),
	(14, 14, 350.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_014.pdf', 'pendiente'),
	(15, 15, 350.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_015.pdf', 'aprobado'),
	(16, 16, 0.00, '2025-11-25 21:32:39', NULL, 'exonerado'),
	(17, 17, 350.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_017.pdf', 'pendiente'),
	(18, 18, 350.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_018.pdf', 'pendiente'),
	(19, 19, 350.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_019.pdf', 'verificando'),
	(20, 20, 350.00, '2025-11-25 21:32:39', '/uploads/pagos/comprobante_020.pdf', 'pendiente');

CREATE TABLE IF NOT EXISTS `procesos_admision` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `anio` int NOT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `procesos_admision` (`id`, `nombre`, `anio`, `fecha_inicio`, `fecha_fin`) VALUES
	(1, 'Admisión 2024-I', 2024, '2024-01-15', '2024-03-10'),
	(2, 'Admisión 2024-II', 2024, '2024-06-15', '2024-08-10'),
	(3, 'Admisión 2025-I', 2025, '2025-01-10', '2025-03-15');

CREATE TABLE IF NOT EXISTS `provincias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `region_id` int NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_provincia` (`region_id`,`nombre`),
  CONSTRAINT `provincias_region_fk` FOREIGN KEY (`region_id`) REFERENCES `regiones` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `provincias` (`id`, `region_id`, `nombre`) VALUES
	(1, 1, 'Lima');

CREATE TABLE IF NOT EXISTS `regiones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `regiones` (`id`, `nombre`) VALUES
	(1, 'Lima');

CREATE TABLE IF NOT EXISTS `requisitos_modalidad` (
  `id` int NOT NULL AUTO_INCREMENT,
  `modalidad_id` int NOT NULL,
  `nombre` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `obligatorio` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `modalidad_id` (`modalidad_id`),
  CONSTRAINT `requisitos_modalidad_ibfk_1` FOREIGN KEY (`modalidad_id`) REFERENCES `modalidades` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `requisitos_modalidad` (`id`, `modalidad_id`, `nombre`, `obligatorio`) VALUES
	(1, 1, 'Certificado de estudios secundarios', 1),
	(2, 1, 'DNI vigente', 1),
	(3, 1, 'Fotografía reciente', 1),
	(4, 1, 'Recibo de pago', 1),
	(5, 2, 'Constancia de egresado del Centro Pre', 1),
	(6, 2, 'DNI vigente', 1),
	(7, 2, 'Fotografía reciente', 1),
	(8, 3, 'Certificado que acredite primer o segundo puesto', 1),
	(9, 3, 'Certificado de estudios secundarios', 1),
	(10, 3, 'DNI vigente', 1),
	(11, 3, 'Fotografía reciente', 1),
	(12, 4, 'Resolución del IPD', 1),
	(13, 4, 'Certificado de estudios secundarios', 1),
	(14, 4, 'DNI vigente', 1),
	(15, 5, 'Certificado de discapacidad CONADIS', 1),
	(16, 5, 'Certificado de estudios secundarios', 1),
	(17, 5, 'DNI vigente', 1),
	(18, 6, 'Constancia de la Comisión Multisectorial de Alto Nivel', 1),
	(19, 6, 'Certificado de estudios secundarios', 1),
	(20, 6, 'DNI vigente', 1),
	(21, 7, 'Constancia de la comunidad', 1),
	(22, 7, 'Certificado de estudios secundarios', 1),
	(23, 7, 'DNI vigente', 1),
	(24, 8, 'Certificado de estudios universitarios', 1),
	(25, 8, 'Sílabos', 1),
	(26, 8, 'DNI vigente', 1);

CREATE TABLE IF NOT EXISTS `resultados` (
  `id` int NOT NULL AUTO_INCREMENT,
  `inscripcion_id` int NOT NULL,
  `puntaje` decimal(5,2) DEFAULT NULL,
  `estado` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `inscripcion_id` (`inscripcion_id`),
  CONSTRAINT `resultados_ibfk_1` FOREIGN KEY (`inscripcion_id`) REFERENCES `inscripciones` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `resultados` (`id`, `inscripcion_id`, `puntaje`, `estado`, `fecha`) VALUES
	(1, 1, 85.50, 'ingresante', '2025-11-25 21:32:39'),
	(2, 3, 92.00, 'ingresante', '2025-11-25 21:32:39'),
	(3, 4, 78.25, 'ingresante', '2025-11-25 21:32:39'),
	(4, 6, 81.75, 'ingresante', '2025-11-25 21:32:39'),
	(5, 9, 88.50, 'ingresante', '2025-11-25 21:32:39'),
	(6, 15, 90.00, 'ingresante', '2025-11-25 21:32:39');

CREATE TABLE IF NOT EXISTS `roles` (
  `id` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `roles` (`id`, `nombre`) VALUES
	(1, 'POSTULANTE'),
	(9, 'ADMIN');

CREATE TABLE IF NOT EXISTS `sedes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `direccion` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `sedes` (`id`, `nombre`, `direccion`) VALUES
	(1, 'Campus Central Puno', 'Av. Floral 1153, Ciudad Universitaria, Puno'),
	(2, 'Sede Juliaca', 'Jr. San Martín 456, Juliaca'),
	(3, 'Local I.E. Carlos Rubina Burgos', 'Jr. Libertad 890, Puno');

CREATE TABLE IF NOT EXISTS `tickets_soporte` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `asunto` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `descripcion` text COLLATE utf8mb4_general_ci,
  `estado` varchar(30) COLLATE utf8mb4_general_ci DEFAULT 'abierto',
  `fecha_creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_cierre` time DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `tickets_soporte_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tickets_soporte` (`id`, `usuario_id`, `asunto`, `descripcion`, `estado`, `fecha_creacion`, `fecha_cierre`) VALUES
	(1, 2, 'No puedo subir mi certificado', 'El sistema me indica error al subir el PDF de mi certificado de estudios', 'abierto', '2025-11-25 21:32:39', NULL),
	(2, 5, 'Error en datos personales', 'Mi apellido está mal escrito, dice Machaca y debe ser Machaca Cruz', 'cerrado', '2025-11-25 21:32:39', '14:30:00'),
	(3, 8, 'Consulta sobre fecha de examen', '¿Cuándo se publicará la fecha del examen de admisión?', 'cerrado', '2025-11-25 21:32:39', '10:15:00'),
	(4, 11, 'Problema con el pago', 'Realicé el pago pero no aparece en el sistema', 'en_proceso', '2025-11-25 21:32:39', NULL),
	(5, 14, 'Cambio de modalidad', 'Deseo cambiar de modalidad ordinario a centro pre', 'abierto', '2025-11-25 21:32:39', NULL);

CREATE TABLE IF NOT EXISTS `tipos_documento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `tipos_documento` (`id`, `nombre`) VALUES
	(1, 'DNI'),
	(2, 'CARNET DE EXTRANJERIA');

CREATE TABLE IF NOT EXISTS `tipo_beneficio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(120) COLLATE utf8mb4_general_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `tipo_beneficio` (`id`, `nombre`, `descripcion`) VALUES
	(1, 'Pobreza Extrema', 'Beneficio para usuarios en situación de pobreza extrema según SISFOH'),
	(2, 'Beca 18', 'Postulante con beca del Programa Nacional Beca 18'),
	(3, 'Deportista de Alto Nivel', 'Deportista calificado por el IPD'),
	(4, 'Persona con Discapacidad', 'Beneficio para personas con certificado CONADIS'),
	(5, 'Comunidad Nativa', 'Miembro de comunidad nativa o campesina'),
	(6, 'Víctima del Terrorismo', 'Hijo de víctima del terrorismo');

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo_documento_id` int NOT NULL DEFAULT '1',
  `nombres` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `apellidos` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `dni` varchar(15) COLLATE utf8mb4_general_ci NOT NULL,
  `correo` varchar(120) COLLATE utf8mb4_general_ci NOT NULL,
  `telefono` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` text COLLATE utf8mb4_general_ci NOT NULL,
  `rol_id` int NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni` (`dni`),
  UNIQUE KEY `correo` (`correo`),
  KEY `tipo_documento_id` (`tipo_documento_id`),
  KEY `rol_id` (`rol_id`),
  CONSTRAINT `usuarios_rol_fk` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `usuarios_tipo_documento_fk` FOREIGN KEY (`tipo_documento_id`) REFERENCES `tipos_documento` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `usuarios` (`id`, `tipo_documento_id`, `nombres`, `apellidos`, `dni`, `correo`, `telefono`, `password`, `rol_id`, `created_at`, `updated_at`) VALUES
	(1, 1, 'Franco Updated', 'Rojas Luque Updated', '77046912', 'francorl_updated@gmail.com', '911111111', '$2y$12$UIJkNgltwl.G6fZ3e/ZOoebDAIXMohU0qDjJR0vDUQadgcgg1fpR2', 1, '2025-12-04 07:51:29', '2025-12-04 08:04:58'),
	(2, 1, 'Juan Carlos', 'Flores Mamani', '72345678', 'jflores@gmail.com', '951234567', 'miPassword1', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(3, 1, 'María Elena', 'Quispe Huamán', '73456789', 'mquispe@hotmail.com', '952345678', 'miPassword2', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(4, 1, 'Luis Alberto', 'Ccama Apaza', '74567890', 'lccama@gmail.com', '953456789', 'miPassword3', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(5, 1, 'Ana Lucía', 'Pari Condori', '75678901', 'apari@outlook.com', '954567890', 'miPassword4', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(6, 1, 'Carlos Enrique', 'Machaca Cruz', '76789012', 'cmachaca@gmail.com', '955678901', 'miPassword5', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(7, 1, 'Rosa María', 'Chura Mamani', '77890123', 'rchura@hotmail.com', '956789012', 'miPassword6', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(8, 1, 'Pedro José', 'Cutipa Quispe', '78901234', 'pcutipa@gmail.com', '957890123', 'miPassword7', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(9, 1, 'Claudia Patricia', 'Coaquira Flores', '79012345', 'ccoaquira@outlook.com', '958901234', 'miPassword8', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(10, 1, 'Roberto Miguel', 'Huanca Apaza', '70123456', 'rhuanca@gmail.com', '959012345', 'miPassword9', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(11, 1, 'Silvia Beatriz', 'Chambilla Pari', '71234567', 'schambilla@hotmail.com', '950123456', 'miPassword10', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(12, 1, 'Jorge Luis', 'Alanoca Mamani', '72234567', 'jalanoca@gmail.com', '951234568', 'miPassword11', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(13, 1, 'Carmen Rosa', 'Inquilla Ccama', '73234567', 'cinquilla@outlook.com', '952234567', 'miPassword12', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(14, 1, 'Miguel Ángel', 'Colque Chura', '74234567', 'mcolque@gmail.com', '953234567', 'miPassword13', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(15, 1, 'Patricia Elena', 'Yapuchura Cutipa', '75234567', 'pyapuchura@hotmail.com', '954234567', 'miPassword14', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(16, 1, 'Fernando José', 'Mullisaca Cruz', '76234567', 'fmullisaca@gmail.com', '955234567', 'miPassword15', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(17, 1, 'Mónica Isabel', 'Condori Flores', '77234567', 'mcondori@outlook.com', '956234567', 'miPassword16', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(18, 1, 'Daniel Alberto', 'Mamani Quispe', '78234567', 'dmamani@gmail.com', '957234567', 'miPassword17', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(19, 1, 'Lucía Fernanda', 'Apaza Pari', '79234567', 'lapaza@hotmail.com', '958234567', 'miPassword18', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(20, 1, 'Raúl Ernesto', 'Cruz Huanca', '70234567', 'rcruz@gmail.com', '959234567', 'miPassword19', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(21, 1, 'Gabriela Sofía', 'Huamán Machaca', '71334567', 'ghuaman@outlook.com', '950234567', 'miPassword20', 1, '2025-12-04 02:55:32', '2025-12-04 02:55:32'),
	(22, 1, 'Persona1', 'Apellido1', '11111111', 'persona1@example.com', '900111111', '$2y$12$v2Qo8LmgP0KDdtEtsGKh5.sAlGlWaXvyTZhZzz2LjKVV.vSdyAr8K', 1, '2025-12-04 07:55:59', '2025-12-04 07:55:59');

CREATE TABLE IF NOT EXISTS `usuario_beneficio` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `tipo_beneficio_id` int NOT NULL,
  `estado` varchar(30) COLLATE utf8mb4_general_ci DEFAULT 'pendiente',
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `observaciones` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `tipo_beneficio_id` (`tipo_beneficio_id`),
  CONSTRAINT `usuario_beneficio_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `usuario_beneficio_ibfk_2` FOREIGN KEY (`tipo_beneficio_id`) REFERENCES `tipo_beneficio` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `usuario_beneficio` (`id`, `usuario_id`, `tipo_beneficio_id`, `estado`, `fecha_registro`, `observaciones`) VALUES
	(1, 10, 4, 'aprobado', '2025-11-25 21:32:39', 'Certificado CONADIS verificado'),
	(2, 16, 5, 'verificando', '2025-11-25 21:32:39', 'Pendiente constancia de comunidad'),
	(3, 3, 1, 'aprobado', '2025-11-25 21:32:39', 'Constancia SISFOH verificada'),
	(4, 7, 3, 'verificando', '2025-11-25 21:32:39', 'Pendiente validación IPD');

CREATE TABLE IF NOT EXISTS `verificacion_documental` (
  `id` int NOT NULL AUTO_INCREMENT,
  `documento_id` int NOT NULL,
  `verificado_por` varchar(150) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `fecha_verificacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estado` varchar(30) COLLATE utf8mb4_general_ci DEFAULT 'pendiente',
  `observaciones` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`),
  KEY `documento_id` (`documento_id`),
  CONSTRAINT `verificacion_documental_ibfk_1` FOREIGN KEY (`documento_id`) REFERENCES `documentos_usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `verificacion_documental` (`id`, `documento_id`, `verificado_por`, `fecha_verificacion`, `estado`, `observaciones`) VALUES
	(1, 1, 'Ana García Pérez', '2024-07-15 15:30:00', 'aprobado', 'Documento conforme'),
	(2, 2, 'Ana García Pérez', '2024-07-15 15:32:00', 'aprobado', 'Documento conforme'),
	(3, 3, 'Carlos Ramos Soto', '2024-07-15 16:00:00', 'aprobado', 'Documento conforme'),
	(4, 6, 'Ana García Pérez', '2024-07-16 14:15:00', 'aprobado', 'Documento conforme'),
	(5, 7, 'María López Díaz', '2024-07-16 19:20:00', 'pendiente', 'Requiere validación adicional'),
	(6, 8, 'Ana García Pérez', '2024-07-17 15:00:00', 'aprobado', 'Documento conforme'),
	(7, 9, 'Carlos Ramos Soto', '2024-07-17 16:30:00', 'aprobado', 'Documento conforme'),
	(8, 10, 'María López Díaz', '2024-07-18 13:45:00', 'rechazado', 'Documento no legible'),
	(9, 11, 'Ana García Pérez', '2024-07-20 14:00:00', 'aprobado', 'Documento conforme'),
	(10, 16, 'Carlos Ramos Soto', '2024-07-22 15:15:00', 'aprobado', 'Documento conforme');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
