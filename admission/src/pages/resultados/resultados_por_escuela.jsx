import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

function ResultadosPorEscuela() {
  // Datos de ejemplo
  const escuelas = [
    {
      nombre: "Ingeniería Civil",
      estudiantes: [
        { puesto: 1, nombre: "Juan Pérez", puntaje: 95.5 },
        { puesto: 2, nombre: "María López", puntaje: 93.0 },
        { puesto: 3, nombre: "Carlos Quispe", puntaje: 91.2 },
      ],
    },
    {
      nombre: "Medicina",
      estudiantes: [
        { puesto: 1, nombre: "Ana Mamani", puntaje: 96.0 },
        { puesto: 2, nombre: "Luis Huanca", puntaje: 94.5 },
        { puesto: 3, nombre: "Sofía Ramos", puntaje: 92.8 },
      ],
    },
    {
      nombre: "Derecho",
      estudiantes: [
        { puesto: 1, nombre: "Pedro Villanueva", puntaje: 94.0 },
        { puesto: 2, nombre: "Claudia Huayta", puntaje: 92.5 },
        { puesto: 3, nombre: "Miguel Torres", puntaje: 91.0 },
      ],
    },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Resultados por Escuela Profesional - UNAP</h2>

      {escuelas.map((escuela, idx) => (
        <Card key={idx} className="shadow-sm border rounded mb-4" style={{ backgroundColor: "#f9f9f9" }}>
          <Card.Body>
            <Card.Title className="mb-3">{escuela.nombre}</Card.Title>
            <Table striped bordered hover responsive style={{ backgroundColor: "#ffffff" }}>
              <thead>
                <tr>
                  <th>Puesto</th>
                  <th>Nombre</th>
                  <th>Puntaje</th>
                </tr>
              </thead>
              <tbody>
                {escuela.estudiantes.map((estudiante, index) => (
                  <tr key={index}>
                    <td>{estudiante.puesto}</td>
                    <td>{estudiante.nombre}</td>
                    <td>{estudiante.puntaje}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      ))}

      <Card className="shadow-sm border rounded text-center p-3" style={{ backgroundColor: "#e9f7ef" }}>
        <Card.Body>
          <Card.Text className="mb-0">
            Revisa los resultados por escuela profesional. Esta información es importante para conocer la ubicación de los postulantes en cada carrera.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ResultadosPorEscuela;
