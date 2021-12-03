import React from "react";
import { Container, Row, Table, Button } from "react-bootstrap";

const SolicitudesUsuarios = () => {
  return (
    <>
      <Container>
        <Row className="bg-white">
          <Table striped bordered hover size="sm" className="table border">
            <thead>
              <tr>
                <th>Solicitudes Usuarios:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Usuario1:</td>
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
                <td>Usuario2:</td>
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
                <td>Usuario3:</td>
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
                <td>Usuario4:</td>
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
                <td>Usuario5:</td>
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
                <td>Usuario6:</td>
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
                <td>Usuario7:</td>
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
                <td>Usuario8:</td>
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
                <td>Usuario9:</td>
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
                <td>Usuario10:</td>
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
