import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

function ResultadosGenerales() {
  // Datos de ejemplo
  const resultados = [
    { puesto: 1, nombre: "Juan Pérez", puntaje: 95.5 },
    { puesto: 2, nombre: "María López", puntaje: 93.0 },
    { puesto: 3, nombre: "Carlos Quispe", puntaje: 91.2 },
    { puesto: 4, nombre: "Ana Mamani", puntaje: 90.5 },
    { puesto: 5, nombre: "Luis Huanca", puntaje: 89.8 },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Resultados Generales - UNAP</h2>

      <Card
        className="shadow-sm border rounded p-4"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <Table
          striped
          bordered
          hover
          responsive
          className="mb-0"
          style={{ backgroundColor: "#ffffff" }}
        >
          <thead>
            <tr>
              <th>Puesto</th>
              <th>Nombre</th>
              <th>Puntaje</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((resultado, index) => (
              <tr key={index}>
                <td>{resultado.puesto}</td>
                <td>{resultado.nombre}</td>
                <td>{resultado.puntaje}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      <Card
        className="shadow-sm border rounded text-center mt-4 p-3"
        style={{ backgroundColor: "#e9f7ef" }}
      >
        <Card.Body>
          <Card.Text className="mb-0">
            Estos son los resultados generales del proceso de admisión. Se
            recomienda revisar los resultados detallados por escuela
            profesional.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ResultadosGenerales;
