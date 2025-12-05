import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ContactoAdmision() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Contacto - Oficina de Admisión UNAP</h2>

      <Card
        className="shadow-sm border rounded p-4 mb-4"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <Card.Body>
          <Card.Text className="mb-3">
            Si tienes dudas o necesitas asistencia, puedes comunicarte con la
            Oficina de Admisión de la UNAP a través de los siguientes medios:
          </Card.Text>

          <ListGroup variant="flush">
            <ListGroup.Item
              className="border rounded mb-2"
              style={{ backgroundColor: "#ffffff" }}
            >
              <strong>Teléfono:</strong> (051) 123-4567
            </ListGroup.Item>
            <ListGroup.Item
              className="border rounded mb-2"
              style={{ backgroundColor: "#ffffff" }}
            >
              <strong>Correo electrónico:</strong> admision@unap.edu.pe
            </ListGroup.Item>
            <ListGroup.Item
              className="border rounded mb-2"
              style={{ backgroundColor: "#ffffff" }}
            >
              <strong>Dirección:</strong> Av. Universitaria s/n, Puno, Perú
            </ListGroup.Item>
            <ListGroup.Item
              className="border rounded mb-2"
              style={{ backgroundColor: "#ffffff" }}
            >
              <strong>Horario de atención:</strong> Lunes a Viernes de 08:00 a
              16:00
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card
        className="shadow-sm border rounded text-center p-3"
        style={{ backgroundColor: "#e9f7ef" }}
      >
        <Card.Body>
          <Card.Text className="mb-0">
            Para cualquier consulta relacionada con el proceso de admisión, no
            dudes en comunicarte con nosotros. Estamos para ayudarte.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ContactoAdmision;
