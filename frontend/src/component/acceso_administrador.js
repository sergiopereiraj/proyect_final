import React from "react";
import {
  Container,
  Row,
  Button,
  ButtonGroup,
} from "react-bootstrap";

const AccesoAdministrador = () => {
  return (
    <Container>
      <Row className="bg-white m-5">
        <ButtonGroup vertical size="lg">
          <Button className="m-1">Registrar Usuario</Button>
          <br/>
          <Button className="m-1">Solicitudes de Usuario</Button>
          <br/>
          <Button className="m-1">Perfil de Usuario</Button>
          <br/>
          <Button className="m-1">Pauta de Supervision</Button>
          <br/>
        </ButtonGroup>
      </Row>
    </Container>
  );
};

export default AccesoAdministrador;
