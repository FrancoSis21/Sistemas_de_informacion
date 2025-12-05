import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function RegistroDatosPersonales() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Registro de Datos Personales - UNAP</h2>

      <Card className="shadow-sm border rounded p-4">
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su nombre completo"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formDNI">
                <Form.Label>DNI</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese su número de DNI"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formFechaNacimiento">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formGenero">
                <Form.Label>Género</Form.Label>
                <Form.Select>
                  <option>Seleccionar</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formCorreo">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su correo" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formTelefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su teléfono" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="formDireccion">
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su dirección" />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit">
            Guardar Datos
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default RegistroDatosPersonales;
