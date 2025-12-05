import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function FichaPostulante() {
  // Ejemplo de datos del postulante
  const postulante = {
    nombre: "Juan Pérez Gómez",
    dni: "12345678",
    fechaNacimiento: "2004-05-12",
    genero: "Masculino",
    correo: "juan.perez@example.com",
    telefono: "(051) 987654321",
    direccion: "Av. Universitaria 123, Puno",
    escuela: "Ingeniería de Sistemas",
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Ficha del Postulante - UNAP</h2>

      <Card className="shadow-sm border rounded p-4">
        <Row className="mb-3">
          <Col md={6}>
            <strong>Nombre completo:</strong> {postulante.nombre}
          </Col>
          <Col md={6}>
            <strong>DNI:</strong> {postulante.dni}
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <strong>Fecha de nacimiento:</strong> {postulante.fechaNacimiento}
          </Col>
          <Col md={6}>
            <strong>Género:</strong> {postulante.genero}
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <strong>Correo electrónico:</strong> {postulante.correo}
          </Col>
          <Col md={6}>
            <strong>Teléfono:</strong> {postulante.telefono}
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <strong>Dirección:</strong> {postulante.direccion}
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <strong>Escuela Profesional:</strong> {postulante.escuela}
          </Col>
        </Row>

        <Button variant="primary">Imprimir Ficha</Button>
      </Card>

      <Card className="mt-4 shadow-sm border rounded text-center">
        <Card.Body>
          <Card.Text>
            Esta ficha muestra un resumen de los datos proporcionados por el
            postulante. Asegúrese de verificar que toda la información sea
            correcta antes de proceder.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default FichaPostulante;
