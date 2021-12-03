import React from "react";
import { Container, Row, ProgressBar, Button } from "react-bootstrap";

const BarraPorcentajeBoton = () => {
  return (
    <>
      <Container>
      <Row className="m-5">
          <ProgressBar animated now={90} />
        </Row>
        <br/>
        <Row>
          {" "}
          <Button className="m-2">Enviar</Button>
        </Row>
      </Container>
    </>
  );
};

export default BarraPorcentajeBoton;
