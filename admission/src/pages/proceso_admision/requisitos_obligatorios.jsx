import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function RequisitosObligatorios() {
  // Requisitos obligatorios de ejemplo
  const requisitos = [
    "Documento Nacional de Identidad (DNI) vigente",
    "Certificado de estudios secundarios completos",
    "Partida de nacimiento",
    "Fotografía tamaño carnet reciente",
    "Comprobante de pago por derecho de examen",
    "Formulario de inscripción debidamente llenado",
  ];

  const coloresPastel = ["#fef3e0", "#e0f7fa", "#f0e5ff", "#e6f4ea", "#fff4f0"];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Requisitos Obligatorios - UNAP</h2>

      <Card className="shadow-sm border rounded">
        <Card.Body>
          <Card.Text>
            Los siguientes documentos y requisitos son obligatorios para
            participar en el proceso de admisión:
          </Card.Text>

          <ListGroup variant="flush">
            {requisitos.map((req, index) => (
              <ListGroup.Item
                key={index}
                style={{
                  backgroundColor: coloresPastel[index % coloresPastel.length],
                  marginBottom: "8px",
                  borderRadius: "5px",
                  fontWeight: "500",
                }}
              >
                {req}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      <Card className="mt-4 shadow-sm border rounded text-center">
        <Card.Body>
          <Card.Text>
            Todos los documentos deben ser presentados en **original y/o copia
            legalizada**, según corresponda.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RequisitosObligatorios;
