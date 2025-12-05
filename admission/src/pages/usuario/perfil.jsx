import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Perfil() {
  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-sm">
        <Card.Body>
          <Card.Title>Perfil del Usuario</Card.Title>
          <Card.Text>
            Aquí puedes ver tu información personal registrada en el sistema de
            admisión.
          </Card.Text>

          <ul className="list-unstyled">
            <li>
              <strong>Nombre:</strong> Franco Rojas
            </li>
            <li>
              <strong>Email:</strong> franco@example.com
            </li>
            <li>
              <strong>Teléfono:</strong> (051) 123-4567
            </li>
            <li>
              <strong>Tipo de usuario:</strong> Postulante
            </li>
          </ul>

          <Button variant="primary" className="mt-3">
            Editar Perfil
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Perfil;
