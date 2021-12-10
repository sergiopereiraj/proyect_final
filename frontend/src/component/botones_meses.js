import React from "react";
import { Container, Row, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BotonesMeses = () => {
  return (
    <>
      <Container>
        <Row className="m-5">
          <ButtonGroup size="lg" className="mb-2">
            <Button className="m-1"><Link className="text-decoration-none text-white" to="/usuario/resultado">Enero</Link></Button>
            <Button className="m-1"><Link className="text-decoration-none text-white" to="/usuario/resultado">Febrero</Link></Button>
            <Button className="m-1"><Link className="text-decoration-none text-white" to="/usuario/resultado">Marzo</Link></Button>
            <Button className="m-1"><Link className="text-decoration-none text-white" to="/usuario/resultado">Abril</Link></Button>
            <Button className="m-1"><Link className="text-decoration-none text-white" to="/usuario/resultado">Mayo</Link></Button>
            <Button className="m-1"><Link className="text-decoration-none text-white" to="/usuario/resultado">Junio</Link></Button>
          </ButtonGroup>
          <ButtonGroup size="lg" className="mb-2">
            <Button className="m-1"><Link className="text-decoration-none text-white" to="/usuario/resultado">Julio</Link></Button>
            <Button className="m-1"><Link className="text-decoration-none text-white" to="/usuario/resultado">Agosto</Link></Button>
            <Button className="m-1"><Link className="text-decoration-none text-white" to="/usuario/resultado">Septiembre</Link></Button>
            <Button className="m-1"><Link className="text-decoration-none text-white" to="/usuario/resultado">Octubre</Link></Button>
            <Button className="m-1"><Link className="text-decoration-none text-white" to="/usuario/resultado">Noviembre</Link></Button>
            <Button className="m-1"><Link className="text-decoration-none text-white" to="/usuario/resultado">Diciembre</Link></Button>
          </ButtonGroup>
        </Row>
      </Container>
    </>
  );
};

export default BotonesMeses;
