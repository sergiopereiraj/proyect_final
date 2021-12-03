import React from "react";
import { Container, Row, Table, InputGroup, Form } from "react-bootstrap";

const BuscadorUsuario = () => {
  return (
    <>
      <Container>
        <Row className="bg-white m-5">
          <Table striped bordered hover size="sm" className="table border">
            <thead>
              <tr>
                <th>
                  <InputGroup>
                    <InputGroup.Text>Nombre Usuario</InputGroup.Text>
                    <Form.Control type="text" placeholder="Nombre Apellido"/>
                  </InputGroup>
                </th>
                <th className="text-center"> Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Antonio Bello</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Andres Valdivia</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Seginmundo Iturra</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Exequiel Gonzalez Cortez</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Emanuel Ginobili</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Facundo Campazzo</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Roberto Carlos</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Jason Kidd</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>LeBron James</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Lukas Doncic</td>
                <td className="text-center">---</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default BuscadorUsuario;
