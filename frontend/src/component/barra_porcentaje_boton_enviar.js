import React from "react";
import { Container, Row, ProgressBar, Button } from "react-bootstrap";

const BarraPorcentajeBoton = () => {
  return (
    <>
      <Container>
      <Row>
          <ProgressBar animated now={90} />
        </Row>
        <br/>
        <Row>
          {" "}
          <Button className="mb-2">Enviar</Button>
        </Row>
      </Container>
    </>
  );
};

export default BarraPorcentajeBoton;
