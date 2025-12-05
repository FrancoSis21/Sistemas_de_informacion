import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function SimulacroExamen() {
  // Tipos de examen
  const examenes = [
    {
      tipo: "CEPRE",
      descripcion:
        "Simulacro del examen CEPRE para postulantes que ingresan mediante el programa de preparación.",
      fecha: "15 de diciembre",
      duracion: "2 horas",
    },
    {
      tipo: "General",
      descripcion:
        "Simulacro del examen general para todos los postulantes del proceso de admisión.",
      fecha: "20 de diciembre",
      duracion: "3 horas",
    },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Simulacro de Examen - UNAP</h2>

      <Row className="g-4">
        {examenes.map((examen, index) => (
          <Col md={6} key={index}>
            <Card className="shadow-sm border rounded p-3">
              <Card.Body>
                <Card.Title>{examen.tipo}</Card.Title>
                <Card.Text>{examen.descripcion}</Card.Text>
                <Card.Text>
                  <strong>Fecha:</strong> {examen.fecha} <br />
                  <strong>Duración:</strong> {examen.duracion}
                </Card.Text>
                <Button variant="success">Realizar Simulacro</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SimulacroExamen;
