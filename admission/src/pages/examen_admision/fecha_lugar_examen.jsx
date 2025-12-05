import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

function FechaLugarExamen() {
  // Información de los exámenes
  const examenes = [
    {
      tipo: "CEPRE",
      fecha: "15 de diciembre 2025",
      lugar: "Campus UNAP - Av. Universitaria 123, Puno",
      hora: "08:00 - 10:00",
    },
    {
      tipo: "General",
      fecha: "20 de diciembre 2025",
      lugar: "Campus UNAP - Av. Universitaria 123, Puno",
      hora: "09:00 - 12:00",
    },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Fecha y Lugar del Examen - UNAP</h2>

      <Card className="shadow-sm border rounded p-4">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Tipo de examen</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Lugar</th>
            </tr>
          </thead>
          <tbody>
            {examenes.map((examen, index) => (
              <tr key={index}>
                <td>{examen.tipo}</td>
                <td>{examen.fecha}</td>
                <td>{examen.hora}</td>
                <td>{examen.lugar}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      <Card className="mt-4 shadow-sm border rounded text-center">
        <Card.Body>
          <Card.Text>
            Todos los exámenes se realizarán exclusivamente en la ciudad de Puno. 
            Asegúrese de asistir puntualmente con su DNI o pasaporte y su comprobante de pago.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default FechaLugarExamen;
