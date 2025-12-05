import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

function PuntajesObtenidos() {
  // Datos de ejemplo
  const puntajes = [
    { nombre: "Juan Pérez", escuela: "Ingeniería Civil", puntaje: 95.5 },
    { nombre: "María López", escuela: "Ingeniería Civil", puntaje: 93.0 },
    { nombre: "Carlos Quispe", escuela: "Ingeniería Civil", puntaje: 91.2 },
    { nombre: "Ana Mamani", escuela: "Medicina", puntaje: 96.0 },
    { nombre: "Luis Huanca", escuela: "Medicina", puntaje: 94.5 },
    { nombre: "Pedro Villanueva", escuela: "Derecho", puntaje: 94.0 },
    { nombre: "Claudia Huayta", escuela: "Derecho", puntaje: 92.5 },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Puntajes Obtenidos - UNAP</h2>

      <Card
        className="shadow-sm border rounded p-4 mb-4"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <Table
          striped
          bordered
          hover
          responsive
          style={{ backgroundColor: "#ffffff" }}
        >
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Escuela Profesional</th>
              <th>Puntaje</th>
            </tr>
          </thead>
          <tbody>
            {puntajes.map((postulante, index) => (
              <tr key={index}>
                <td>{postulante.nombre}</td>
                <td>{postulante.escuela}</td>
                <td>{postulante.puntaje}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      <Card
        className="shadow-sm border rounded text-center p-3"
        style={{ backgroundColor: "#e9f7ef" }}
      >
        <Card.Body>
          <Card.Text className="mb-0">
            Estos son los puntajes obtenidos por cada postulante en el proceso
            de admisión. Revisa la tabla para conocer el desempeño individual y
            por escuela profesional.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PuntajesObtenidos;
