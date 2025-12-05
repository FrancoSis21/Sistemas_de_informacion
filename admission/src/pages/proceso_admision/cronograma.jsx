import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Cronograma() {
  const actividades = [
    { fecha: "10 de diciembre", evento: "Apertura de inscripciones" },
    { fecha: "20 de diciembre", evento: "Cierre de inscripciones" },
    { fecha: "5 de enero", evento: "Simulacro de examen" },
    { fecha: "10 de enero", evento: "Examen de admisión" },
    { fecha: "15 de enero", evento: "Publicación de resultados" },
  ];

  const coloresPastel = ["#fef3e0", "#e0f7fa", "#f0e5ff", "#e6f4ea", "#fff4f0"];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Cronograma de Admisión - UNAP</h2>

      <Row>
        {actividades.map((act, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card
              style={{
                backgroundColor: coloresPastel[index % coloresPastel.length],
              }}
              className="shadow-sm border rounded"
            >
              <Card.Body>
                <Card.Title style={{ fontWeight: "600" }}>
                  {act.fecha}
                </Card.Title>
                <Card.Text>{act.evento}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Mensaje final */}
      <Card className="mt-4 shadow-sm border rounded text-center">
        <Card.Body>
          <Card.Text>
            Estas fechas son referenciales y pueden estar sujetas a cambios por
            la Oficina de Admisión.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Cronograma;
