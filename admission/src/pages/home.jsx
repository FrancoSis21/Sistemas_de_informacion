import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ejemploImage from '../assets/imagen_izquierda_login/unap_LR.jpg';

function Home() {
  return (
    <Container fluid className="mt-4">

      <Row className="align-items-center justify-content-center">

        {/* Imagen grande a la izquierda */}
        <Col md={5} className="text-center mb-3 mb-md-0">
          <Image 
            src={ejemploImage} 
            rounded 
            fluid 
            alt="Imagen de admisión"
            style={{ maxHeight: '550px', objectFit: 'cover', width: '100%' }}
          />
        </Col>

        {/* Información a la derecha: contenedor general bordeado */}
        <Col md={7}>
          <Card className="p-4 shadow-sm border">
            
            {/* Bienvenida */}
            <Card.Body className="mb-4">
              <Card.Title>Bienvenido al Sistema de Admisión - UNAP</Card.Title>
              <Card.Text>
                Actualmente no hay procesos de admisión activos. 
                A continuación, se muestran ejemplos de futuros procesos:
              </Card.Text>
            </Card.Body>

            {/* Lista de procesos como tarjetas individuales */}
            <Row>
              <Col md={12} className="mb-1">
                <Card className="p-3 shadow-sm border">
                  <Card.Body>
                    <Card.Text>Próximo proceso de admisión 2026 (fecha por confirmar)</Card.Text>
                    <Button variant="outline-primary" size="sm" disabled>
                      Ver detalles
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12} className="mb-1">
                <Card className="p-3 shadow-sm border">
                  <Card.Body>
                    <Card.Text>Registro de postulantes en línea (inactivo)</Card.Text>
                    <Button variant="outline-primary" size="sm" disabled>
                      Ver detalles
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12} className="mb-1">
                <Card className="p-3 shadow-sm border">
                  <Card.Body>
                    <Card.Text>Información general de requisitos (disponible)</Card.Text>
                    <Button variant="outline-primary" size="sm">
                      Ver detalles
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </Card>
        </Col>

      </Row>

    </Container>
  );
}

export default Home;
