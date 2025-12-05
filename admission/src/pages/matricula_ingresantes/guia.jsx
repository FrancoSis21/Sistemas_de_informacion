import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function GuiaMatricula() {
  // Pasos de ejemplo
  const pasos = [
    "Acceder al portal de matrícula con tu usuario y contraseña.",
    "Verificar los resultados y confirmar que estás admitido.",
    "Completar el formulario de matrícula en línea con tus datos personales.",
    "Subir todos los documentos requeridos (DNI, certificados, fotos, etc.).",
    "Realizar el pago por derecho de matrícula y subir el voucher.",
    "Revisar que toda la información esté correcta y enviar la solicitud.",
    "Recibir la confirmación de matrícula y descargar tu comprobante.",
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Guía Paso a Paso de Matrícula - UNAP</h2>

      <Card
        className="shadow-sm border rounded p-4 mb-4"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <Card.Body>
          <Card.Text className="mb-3">
            Sigue estos pasos para completar tu matrícula correctamente:
          </Card.Text>

          <ListGroup variant="flush">
            {pasos.map((paso, index) => (
              <ListGroup.Item
                key={index}
                className="border rounded mb-2"
                style={{ backgroundColor: "#ffffff" }}
              >
                Paso {index + 1}: {paso}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      <Card
        className="shadow-sm border rounded text-center p-3"
        style={{ backgroundColor: "#e9f7ef" }}
      >
        <Card.Body>
          <Card.Text className="mb-0">
            Siguiendo esta guía paso a paso podrás completar tu matrícula sin
            errores y asegurar tu ingreso a la UNAP.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default GuiaMatricula;
