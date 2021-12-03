import React from "react";
import { Container, Row, Table, Form } from "react-bootstrap";
import BarraPorcentajeBoton from "./barra_porcentaje_boton_enviar";

const FormularioLavado = () => {
  return (
    <>
      <Container>
        <h1 className="text-center m-5">Supervision de Lavado de Manos</h1>
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
                <td>Antes de tocar al Paciente</td>
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
                <td>Antes de realizar una tarea aseptica</td>
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
                <td>Después de riesgo de exposicion a líquido corporales</td>
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
                <td>Después de tocar al paciente</td>
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
              <tr>
                <td>Después de contacto con el entorno del paciente</td>
                <td className="text-center">
                  <Form.Check
                    type="radio"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta5"
                    value="true"
                  />
                </td>
                <td className="text-center">
                  <Form.Check
                    type="radio"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta5"
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

export default FormularioLavado;
