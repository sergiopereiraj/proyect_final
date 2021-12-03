import React from "react";
import { Container, Row, Table, Button } from "react-bootstrap";

const SolicitudesUsuarios = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mt-3"> Solicitudes  Pendientes de Usuarios</h1>
        <Row className="bg-white m-5">
          <Table striped bordered hover size="sm" className="table border">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Rut</th>
                <th>Tipo de Usuarios</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Antonio</td>
                <td>Bello</td>
                <td>12.123.123-6</td>
                <td>Administrador</td>
                <td className="text-center">
                  <Button variant="success">
                    Acepta
                  </Button>
                </td>
                <td className="text-center">
                  <Button variant="danger">
                    Rechaza
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Andres</td>
                <td>Valdivia</td>
                <td>12.123.123-6</td>
                <td>Director</td>
                <td className="text-center">
                  <Button variant="success">
                    Acepta
                  </Button>
                </td>
                <td className="text-center">
                  <Button variant="danger">
                    Rechaza
                  </Button>
                </td>
              </tr>
              <tr>
              <td>Oscar</td>
                <td>Schmidt</td>
                <td>12.123.123-6</td>
                <td>Usuario</td>
                <td className="text-center">
                  <Button variant="success">
                    Acepta
                  </Button>
                </td>
                <td className="text-center">
                  <Button variant="danger">
                    Rechaza
                  </Button>
                </td>
              </tr>
              <tr>
              <td>Greivis</td>
                <td>Vasquez</td>
                <td>12.123.123-6</td>
                <td>Usuario</td>
                <td className="text-center">
                  <Button variant="success">
                    Acepta
                  </Button>
                </td>
                <td className="text-center">
                  <Button variant="danger">
                    Rechaza
                  </Button>
                </td>
              </tr>
              <tr>
              <td>Jason</td>
                <td>Kidd</td>
                <td>12.123.123-6</td>
                <td>Usuario</td>
                <td className="text-center">
                  <Button variant="success">
                    Acepta
                  </Button>
                </td>
                <td className="text-center">
                  <Button variant="danger">
                    Rechaza
                  </Button>
                </td>
              </tr>
              <tr>
              <td>Emanuel</td>
                <td>Ginobili</td>
                <td>12.123.123-6</td>
                <td>Usuario</td>
                <td className="text-center">
                  <Button variant="success">
                    Acepta
                  </Button>
                </td>
                <td className="text-center">
                  <Button variant="danger">
                    Rechaza
                  </Button>
                </td>
              </tr>
              <tr>
              <td>Facundo</td>
                <td>Campazzo</td>
                <td>12.123.123-6</td>
                <td>Usuario</td>
                <td className="text-center">
                  <Button variant="success">
                    Acepta
                  </Button>
                </td>
                <td className="text-center">
                  <Button variant="danger">
                    Rechaza
                  </Button>
                </td>
              </tr>
              <tr>
              <td>Lukas</td>
                <td>Doncic</td>
                <td>12.123.123-6</td>
                <td>Usuario</td>
                <td className="text-center">
                  <Button variant="success">
                    Acepta
                  </Button>
                </td>
                <td className="text-center">
                  <Button variant="danger">
                    Rechaza
                  </Button>
                </td>
              </tr>
              <tr>
              <td>LeBron James</td>
                <td>Valdivia</td>
                <td>12.123.123-6</td>
                <td>Usuario</td>
                <td className="text-center">
                  <Button variant="success">
                    Acepta
                  </Button>
                </td>
                <td className="text-center">
                  <Button variant="danger">
                    Rechaza
                  </Button>
                </td>
              </tr>
              <tr>
              <td>Hal</td>
                <td>Horford</td>
                <td>12.123.123-6</td>
                <td>Usuario</td>
                <td className="text-center">
                  <Button variant="success">
                    Acepta
                  </Button>
                </td>
                <td className="text-center">
                  <Button variant="danger">
                    Rechaza
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default SolicitudesUsuarios;
