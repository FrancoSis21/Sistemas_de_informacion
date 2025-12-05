import { useState } from "react";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";

function Header({ setActiveSection }) {
  const [showProceso, setShowProceso] = useState(false);
  const [showInscripcion, setShowInscripcion] = useState(false);
  const [showExamen, setShowExamen] = useState(false);
  const [showResultados, setShowResultados] = useState(false);
  const [showMatricula, setShowMatricula] = useState(false);

  // para el usuario
  const [showUsuario, setShowUsuario] = useState(false);

  return (
    <Navbar expand={false} className="bg-body-tertiary mb-3">
      <Container fluid>
        {/* NOMBRE + TOGGLE + BOTON USUARIO */}
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex align-items-center">
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-false" />
            <Navbar.Brand className="ms-2">
              Sistema de Admision - UNAP
            </Navbar.Brand>
          </div>

          {/* Dropdown de usuario estilizado en la esquina superior derecha */}
          <Dropdown
            show={showUsuario}
            onToggle={() => setShowUsuario(!showUsuario)}
            align="end"
          >
            <Dropdown.Toggle
              variant="light"
              id="dropdown-usuario"
              style={{
                border: "1px solid #ced4da",
                borderRadius: "8px",
                padding: "0.375rem 0.75rem",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              USUARIO
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                minWidth: "200px",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                padding: "0.5rem 0",
              }}
            >
              <Dropdown.Header
                style={{
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  padding: "0.5rem 1rem",
                }}
              >
                Usuario
              </Dropdown.Header>
              <Dropdown.Item
                style={{ padding: "0.5rem 1rem" }}
                onClick={() => setActiveSection("perfil")}
              >
                Perfil
              </Dropdown.Item>
              <Dropdown.Item
                style={{ padding: "0.5rem 1rem" }}
                onClick={() => setActiveSection("configuracion")}
              >
                Configuración
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                style={{ padding: "0.5rem 1rem", color: "#dc3545" }}
              >
                Cerrar sesión
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Navbar.Offcanvas id="offcanvasNavbar-expand-false" placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Admisión UNAP</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="pe-3">
              <Nav.Link onClick={() => setActiveSection("inicio")}>
                Inicio
              </Nav.Link>

              {/* PROCESO DE ADMISION */}
              <NavDropdown
                title="Proceso de admision"
                show={showProceso}
                onMouseEnter={() => setShowProceso(true)}
                onMouseLeave={() => setShowProceso(false)}
              >
                <NavDropdown.Item
                  onClick={() => setActiveSection("cronograma")}
                >
                  Cronograma de admision
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setActiveSection("requisitos")}
                >
                  Requisitos obligatorios
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setActiveSection("modalidades")}
                >
                  Modalidades de ingreso
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setActiveSection("vacantes")}>
                  Vacantes por escuela profesional
                </NavDropdown.Item>
              </NavDropdown>

              {/* INSCRIPCION */}
              <NavDropdown
                title="Inscripcion del postulante"
                show={showInscripcion}
                onMouseEnter={() => setShowInscripcion(true)}
                onMouseLeave={() => setShowInscripcion(false)}
              >
                <NavDropdown.Item onClick={() => setActiveSection("registro")}>
                  Registro de datos personales
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setActiveSection("pago")}>
                  Pago por derecho de examen
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setActiveSection("documentos")}
                >
                  Carga de documentos
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setActiveSection("ficha")}>
                  Ficha de postulante
                </NavDropdown.Item>
              </NavDropdown>

              {/* EXAMEN */}
              <NavDropdown
                title="Examen de admision"
                show={showExamen}
                onMouseEnter={() => setShowExamen(true)}
                onMouseLeave={() => setShowExamen(false)}
              >
                <NavDropdown.Item onClick={() => setActiveSection("simulacro")}>
                  Simulacro de examen
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setActiveSection("fecha")}>
                  Fecha y lugar del examen
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setActiveSection("reglas")}>
                  Reglamento del examen
                </NavDropdown.Item>
              </NavDropdown>

              {/* RESULTADOS */}
              <NavDropdown
                title="Resultados"
                show={showResultados}
                onMouseEnter={() => setShowResultados(true)}
                onMouseLeave={() => setShowResultados(false)}
              >
                <NavDropdown.Item
                  onClick={() => setActiveSection("resultados-generales")}
                >
                  Resultados generales
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setActiveSection("por-escuela")}
                >
                  Resultados por escuela
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setActiveSection("puntajes")}>
                  Puntajes obtenidos
                </NavDropdown.Item>
              </NavDropdown>

              {/* MATRICULA */}
              <NavDropdown
                title="Matricula de ingresantes"
                show={showMatricula}
                onMouseEnter={() => setShowMatricula(true)}
                onMouseLeave={() => setShowMatricula(false)}
              >
                <NavDropdown.Item
                  onClick={() => setActiveSection("lista-ingresantes")}
                >
                  Lista de ingresantes
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setActiveSection("requisitos-matricula")}
                >
                  Requisitos de matricula
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setActiveSection("guia-matricula")}
                >
                  Guia paso a paso
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link onClick={() => setActiveSection("contacto")}>
                Contacto - Oficina de Admisión
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
