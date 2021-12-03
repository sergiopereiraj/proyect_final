import React from "react";
import { Container, Row, Table, InputGroup, Form } from "react-bootstrap";

const BuscadorUsuario = () => {
  return (
    <>
      <Container>
        <Row className="bg-white">
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
                <td>Usuario1:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario2:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario3:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario4:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario5:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario6:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario7:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario8:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario9:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario10:</td>
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
