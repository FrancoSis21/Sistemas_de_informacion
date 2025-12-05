import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Vacantes() {
  // Lista de escuelas profesionales con vacantes (ejemplo)
  const escuelas = [
    { nombre: "Ingeniería Civil", vacantes: 50 },
    { nombre: "Ingeniería Electrónica", vacantes: 40 },
    { nombre: "Ingeniería de Sistemas", vacantes: 60 },
    { nombre: "Ingeniería Industrial", vacantes: 45 },
    { nombre: "Medicina", vacantes: 30 },
    { nombre: "Enfermería", vacantes: 35 },
    { nombre: "Arquitectura", vacantes: 25 },
    { nombre: "Contabilidad y Finanzas", vacantes: 40 },
    { nombre: "Derecho", vacantes: 50 },
    { nombre: "Psicología", vacantes: 30 },
    { nombre: "Administración de Empresas", vacantes: 55 },
    { nombre: "Economía", vacantes: 35 },
  ];

  const coloresPastel = ["#fef3e0", "#e0f7fa", "#f0e5ff", "#e6f4ea", "#fff4f0"];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Vacantes por Escuela Profesional - UNAP</h2>

      <Row>
        {escuelas.map((escuela, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card
              style={{
                backgroundColor: coloresPastel[index % coloresPastel.length],
              }}
              className="shadow-sm border rounded"
            >
              <Card.Body>
                <Card.Title style={{ fontWeight: "600" }}>
                  {escuela.nombre}
                </Card.Title>
                <Card.Text>Vacantes disponibles: {escuela.vacantes}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mt-4 shadow-sm border rounded text-center">
        <Card.Body>
          <Card.Text>
            Los números de vacantes son referenciales y pueden estar sujetos a
            cambios por la Oficina de Admisión.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Vacantes;
