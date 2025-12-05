import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Configuracion() {
  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-sm">
        <Card.Body>
          <Card.Title>Configuración de la Cuenta</Card.Title>
          <Card.Text>
            Aquí puedes modificar la configuración de tu cuenta y preferencias.
          </Card.Text>

          <Form>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Cambiar contraseña</Form.Label>
              <Form.Control type="password" placeholder="Nueva contraseña" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNotificaciones">
              <Form.Check
                type="switch"
                label="Recibir notificaciones por correo"
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Guardar cambios
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Configuracion;
