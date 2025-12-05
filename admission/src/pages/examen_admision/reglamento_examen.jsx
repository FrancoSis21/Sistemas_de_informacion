import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

function ReglamentoExamen() {
  // Lista de reglas de ejemplo
  const reglas = [
    "Presentarse puntualmente con su DNI o pasaporte y comprobante de pago.",
    "No se permitirá el ingreso con dispositivos electrónicos, libros o apuntes.",
    "Los postulantes deben permanecer en silencio durante todo el examen.",
    "Cualquier intento de copia o fraude será motivo de exclusión inmediata.",
    "Seguir las indicaciones del personal encargado durante todo el proceso.",
    "El uso de calculadoras o cualquier material no autorizado está prohibido.",
    "Revisar previamente el aula asignada y los materiales permitidos.",
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Reglamento del Examen - UNAP</h2>

      <Card
        className="shadow-sm border rounded p-4 mb-4"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <Card.Body>
          <Card.Text className="mb-3">
            A continuación, se presentan las normas que deben seguir todos los
            postulantes durante el examen de admisión:
          </Card.Text>

          <ListGroup variant="flush">
            {reglas.map((regla, index) => (
              <ListGroup.Item
                key={index}
                className="mb-2 border rounded d-flex align-items-start"
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                <Badge bg="secondary" className="me-3" pill>
                  {index + 1}
                </Badge>
                <span>{regla}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      <Card
        className="shadow-sm border rounded text-center p-3"
        style={{ backgroundColor: "#e9f7ef" }}
      >
        <Card.Body>
          <Card.Text className="mb-0">
            Cumplir con estas reglas garantiza un proceso de admisión ordenado y
            justo para todos los postulantes.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ReglamentoExamen;
