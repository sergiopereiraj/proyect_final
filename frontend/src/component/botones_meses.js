import React from "react";
import { Container, Row, ButtonGroup, Button } from "react-bootstrap";

const BotonesMeses = () => {
  return (
    <>
      <Container>
        <Row>
          <ButtonGroup size="lg" className="mb-2">
            <Button className="m-1">Enero</Button>
            <Button className="m-1">Febrero</Button>
            <Button className="m-1">Marzo</Button>
            <Button className="m-1">Abril</Button>
            <Button className="m-1">Mayo</Button>
            <Button className="m-1">Junio</Button>
          </ButtonGroup>
          <ButtonGroup size="lg" className="mb-2">
            <Button className="m-1">Julio</Button>
            <Button className="m-1">Agosto</Button>
            <Button className="m-1">Septiembre</Button>
            <Button className="m-1">Octubre</Button>
            <Button className="m-1">Noviembre</Button>
            <Button className="m-1">Diciembre</Button>
          </ButtonGroup>
        </Row>
      </Container>
    </>
  );
};

export default BotonesMeses;
