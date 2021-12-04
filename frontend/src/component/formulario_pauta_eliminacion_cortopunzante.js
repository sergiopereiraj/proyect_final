import React from "react";
import { Container, Row, Table, Form } from "react-bootstrap";
import BarraPorcentajeBoton from "./barra_porcentaje_boton_enviar";

const SupervisionCortopunzante = () => {
  return (
    <>
      <Container>
        <h1 className="text-center m-5">
          Supervision Eliminacion Correcta Material Cortopunzante
        </h1>
        <Row className="bg-white m-5">
          <Table striped bordered hover size="sm" className="table border">
            <thead>
              <tr>
                <th>Requisito</th>
                <th className="text-center">Cumple</th>
                <th className="text-center">No Cumple</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Caja de cortopunzante presenta solo objetos cortopunzante
                </td>
                <td className="">
                  <Form.Check
                    type="radio"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta1"
                    value="true"
                  />
                </td>
                <td className="text-center">
                  <Form.Check
                    type="radio"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta1"
                    value="false"
                    checked
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Desechos dentro de caja cortopunzante no sobrepasa tres
                  cuartos de su capacidad
                </td>
                <td className="text-center">
                  <Form.Check
                    type="radio"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta2"
                    value="true"
                  />
                </td>
                <td className="text-center">
                  <Form.Check
                    type="radio"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta2"
                    value="false"
                    checked
                  />
                </td>
              </tr>
              <tr>
                <td>Caja de cortopunzante ubicada en área sucia.</td>
                <td className="text-center">
                  <Form.Check
                    type="radio"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta3"
                    value="true"
                  />
                </td>
                <td className="text-center">
                  <Form.Check
                    type="radio"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta3"
                    value="false"
                    checked
                  />
                </td>
              </tr>
              <tr>
                <td>Se tiene pinzas para retiro de aguja de jeringa</td>
                <td className="text-center">
                  <Form.Check
                    type="radio"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta4"
                    value="true"
                  />
                </td>
                <td className="text-center">
                  <Form.Check
                    type="radio"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta4"
                    value="false"
                    checked
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <BarraPorcentajeBoton />
      </Container>
    </>
  );
};

export default SupervisionCortopunzante;
