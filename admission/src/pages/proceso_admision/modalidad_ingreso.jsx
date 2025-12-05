import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ModalidadesIngreso() {
  // Modalidades de ingreso de ejemplo
  const modalidades = [
    {
      titulo: "Examen de Admisión General",
      descripcion:
        "Modalidad tradicional mediante evaluación escrita de conocimientos generales y específicos.",
    },
    {
      titulo: "Ingreso por Excelencia Académica",
      descripcion:
        "Para estudiantes con alto rendimiento académico en secundaria, evaluado por promedio ponderado y distinciones.",
    },
    {
      titulo: "Ingreso por Convalidación o Traslado",
      descripcion:
        "Para estudiantes que desean trasladarse desde otras universidades o programas, sujeto a cumplimiento de requisitos.",
    },
    {
      titulo: "Ingreso por Discapacidad o Condición Especial",
      descripcion:
        "Modalidad especial para postulantes con necesidades educativas especiales, con documentación de soporte requerida.",
    },
  ];

  const coloresPastel = ["#fef3e0", "#e0f7fa", "#f0e5ff", "#e6f4ea"];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Modalidades de Ingreso - UNAP</h2>

      <Row>
        {modalidades.map((mod, index) => (
          <Col md={6} lg={6} key={index} className="mb-4">
            <Card
              style={{
                backgroundColor: coloresPastel[index % coloresPastel.length],
              }}
              className="shadow-sm border rounded"
            >
              <Card.Body>
                <Card.Title style={{ fontWeight: "600" }}>
                  {mod.titulo}
                </Card.Title>
                <Card.Text>{mod.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mt-4 shadow-sm border rounded text-center">
        <Card.Body>
          <Card.Text>
            Las modalidades de ingreso pueden estar sujetas a requisitos
            adicionales según cada escuela profesional.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ModalidadesIngreso;
