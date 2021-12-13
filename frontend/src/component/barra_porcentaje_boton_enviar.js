import React, { useState, forwardRef, useImperativeHandle, useContext } from "react";
import { Container, Row, ProgressBar, Button, AccordionButton } from "react-bootstrap";
import { Context } from "../store/AppContent";


const BarraPorcentajeBoton = forwardRef((props, ref) => {

  const [currProgress, setProgress] = useState(0);
  const { store, actions } = useContext(Context);

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
          {/* <Button className="m-2"onSubmit={actions.onSubmit}>Enviar</Button> */}
        </Row>
      </Container>
    </>
  );
});

export default BarraPorcentajeBoton;
