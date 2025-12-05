import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

function ListaIngresantes() {
  // Datos de ejemplo
  const ingresantes = [
    { codigo: "001", nombre: "Juan Pérez", escuela: "Ingeniería Civil" },
    { codigo: "002", nombre: "María López", escuela: "Medicina" },
    { codigo: "003", nombre: "Carlos Quispe", escuela: "Derecho" },
    { codigo: "004", nombre: "Ana Mamani", escuela: "Medicina" },
    { codigo: "005", nombre: "Luis Huanca", escuela: "Ingeniería Civil" },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Lista de Ingresantes - UNAP</h2>

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
              <th>Código</th>
              <th>Nombre</th>
              <th>Escuela Profesional</th>
            </tr>
          </thead>
          <tbody>
            {ingresantes.map((ingresante, index) => (
              <tr key={index}>
                <td>{ingresante.codigo}</td>
                <td>{ingresante.nombre}</td>
                <td>{ingresante.escuela}</td>
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
            Esta tabla muestra la lista de ingresantes por escuela profesional.
            Los datos corresponden a los postulantes que han cumplido con todos
            los requisitos de matrícula.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ListaIngresantes;
