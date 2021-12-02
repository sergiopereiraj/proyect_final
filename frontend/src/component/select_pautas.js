import React from "react";
import { Container, Row, Form } from "react-bootstrap";

const SelectPautas = () => {
  return (
    <Container>
      <Row>
        <Form.Group>
          <Form.Label htmlFor="exampleFormControlSelect1">
            Seleccionar Pauta de Supervision:
          </Form.Label>
          <Form.Select className="form-control" id="exampleFormControlSelect1">
            <option>Lavado de Manos</option>
            <option>Eliminacion de Cortopunzantes</option>
            <option>Almacenamiento de Material Esteril</option>
          </Form.Select>
        </Form.Group>
      </Row>
    </Container>
  );
};

export default SelectPautas;
