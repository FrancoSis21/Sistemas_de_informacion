import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function PagoDerechoExamen() {
  // Ejemplo de tarifas por tipo de postulante
  const tarifas = [
    { tipo: "Postulante regular", monto: "S/ 120" },
    { tipo: "Exalumno", monto: "S/ 100" },
    { tipo: "Postulante extranjero", monto: "S/ 150" },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Pago por Derecho de Examen - UNAP</h2>

      <Card className="shadow-sm border rounded p-4">
        <Card.Body>
          <Card.Text>
            Para participar en el proceso de admisión, es necesario realizar el
            pago por derecho de examen según corresponda al tipo de postulante.
          </Card.Text>

          <Table striped bordered hover responsive className="mt-3">
            <thead>
              <tr>
                <th>Tipo de postulante</th>
                <th>Monto</th>
              </tr>
            </thead>
            <tbody>
              {tarifas.map((tarifa, index) => (
                <tr key={index}>
                  <td>{tarifa.tipo}</td>
                  <td>{tarifa.monto}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Button variant="success" className="mt-3">
            Proceder al Pago
          </Button>
        </Card.Body>
      </Card>

      <Card className="mt-4 shadow-sm border rounded text-center">
        <Card.Body>
          <Card.Text>
            Asegúrese de guardar el comprobante de pago, ya que será requerido
            para completar su inscripción.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PagoDerechoExamen;
