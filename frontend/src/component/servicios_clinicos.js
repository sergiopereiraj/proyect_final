import React from "react";
import { Container, Row, Form } from "react-bootstrap";

const ServiciosClinicos = () => {
  return (
    <>
      <Container>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="exampleFormControlSelect1">
                Seleccionar Servicio Clinico:
              </Form.Label>
              <Form.Select className="form-control" id="exampleFormControlSelect1">
                <option>Box Procedimiento</option>
                <option>Box Curaciones</option>
                <option>Box Dental</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default ServiciosClinicos;
