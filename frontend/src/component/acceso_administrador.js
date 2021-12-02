import React from "react";
import {
  Container,
  Row,
  ProgressBar,
  Button,
  ButtonGroup,
} from "react-bootstrap";

const AccesoAdministrador = () => {
  return (
    <Container>
      <Row>
        <ButtonGroup vertical>
          <Button className="m-1">Registrar Usuario</Button>
          <Button className="m-1">Solicitudes de Usuario</Button>
          <Button className="m-1">Perfil de Usuario</Button>
          <Button className="m-1">Pauta de Supervision</Button>
        </ButtonGroup>
      </Row>
    </Container>
  );
};

export default AccesoAdministrador;
