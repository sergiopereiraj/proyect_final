import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Container, Row, ProgressBar, Button } from "react-bootstrap";

const BarraPorcentajeBoton = forwardRef((props, ref) => {

  const [currProgress, setProgress] = useState(0);

  useImperativeHandle(ref, () => ({
    addToProgress(value) {
      setProgress(currProgress + value);
    },
    removeFromProgress(value) {
      setProgress(currProgress - value);
    }
  }));

  return (
    <>
      <Container>
        <Row className="m-5">
          <ProgressBar animated now={currProgress} />
        </Row>
        <br/>
        <Row>
          {" "}
          <Button className="m-2">Enviar</Button>
        </Row>
      </Container>
    </>
  );
});

export default BarraPorcentajeBoton;
