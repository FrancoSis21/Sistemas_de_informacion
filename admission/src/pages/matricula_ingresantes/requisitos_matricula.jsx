import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function RequisitosMatricula() {
  // Lista de ejemplo de requisitos
  const requisitos = [
    "Presentar DNI original y copia.",
    "Voucher de pago por derecho de matrícula.",
    "Certificado de estudios secundarios.",
    "Certificado de salud emitido por institución reconocida.",
    "Fotos tamaño carnet recientes (2 unidades).",
    "Formulario de matrícula completado.",
    "Carta de compromiso firmada por el postulante.",
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Requisitos de Matrícula - UNAP</h2>

      <Card className="shadow-sm border rounded p-4 mb-4" style={{ backgroundColor: "#f9f9f9" }}>
        <Card.Body>
          <Card.Text className="mb-3">
            A continuación se detallan los requisitos que deben cumplir los postulantes admitidos para formalizar su matrícula:
          </Card.Text>

          <ListGroup variant="flush">
            {requisitos.map((requisito, index) => (
              <ListGroup.Item key={index} className="border rounded mb-2" style={{ backgroundColor: "#ffffff" }}>
                {index + 1}. {requisito}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      <Card className="shadow-sm border rounded text-center p-3" style={{ backgroundColor: "#e9f7ef" }}>
        <Card.Body>
          <Card.Text className="mb-0">
            Asegúrate de cumplir con todos los requisitos antes de realizar la matrícula para evitar inconvenientes.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RequisitosMatricula;
