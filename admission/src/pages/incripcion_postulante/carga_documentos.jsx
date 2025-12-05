import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CargaDocumentos() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Carga de Documentos - UNAP</h2>

      <Card className="shadow-sm border rounded p-4">
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formDNI">
                <Form.Label>DNI o Pasaporte</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formCertificado">
                <Form.Label>Certificado de Estudios Secundarios</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formFoto">
                <Form.Label>Fotografía reciente</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formOtros">
                <Form.Label>Otros documentos (opcional)</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit">
            Subir Documentos
          </Button>
        </Form>
      </Card>

      <Card className="mt-4 shadow-sm border rounded text-center">
        <Card.Body>
          <Card.Text>
            Asegúrese de subir documentos en formato PDF o JPG y con un tamaño
            máximo de 5MB por archivo.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CargaDocumentos;
