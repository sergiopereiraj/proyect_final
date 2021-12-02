import React from "react";
import {
  Container,
  Row,
  Form,
  Table,
  ProgressBar,
  Button,
} from "react-bootstrap";
import BarraPorcentajeBoton from "./barra_porcentaje_boton_enviar";

const ConstruccionFormulario = () => {
  return (
    <>
      <Container>
        <p className="text-center">Titulo Formulario</p>
        <Row>
          <Form>
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
                  <td className="text-center">
                    <Form.Check
                      type="radio"
                      id=""
                      className="mb-2"
                      label=""
                      name="pregunta1"
                      value="false"
                    />
                  </td>
                  <td className="text-center">
                    <Form.Check
                      type="radio"
                      id=""
                      className="mb-2"
                      label=""
                      name="pregunta1"
                      value="true"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Antes de realizar una tarea aseptica</td>
                  <td className="text-center">
                    <Form.Check
                      type="radio"
                      id=""
                      className="mb-2"
                      label=""
                      name="pregunta2"
                      value="false"
                    />
                  </td>
                  <td className="text-center">
                    <Form.Check
                      type="radio"
                      id=""
                      className="mb-2"
                      label=""
                      name="pregunta2"
                      value="true"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Después de riesgo de exposicion a líquido corporales</td>
                  <td className="text-center">
                    <Form.Check
                      type="radio"
                      id=""
                      className="mb-2"
                      label=""
                      name="pregunta3"
                      value="false"
                    />
                  </td>
                  <td className="text-center">
                    <Form.Check
                      type="radio"
                      id=""
                      className="mb-2"
                      label=""
                      name="pregunta3"
                      value="true"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Después de tocar al paciente</td>
                  <td className="text-center">
                    <Form.Check
                      type="radio"
                      id=""
                      className="mb-2"
                      label=""
                      name="pregunta4"
                      value="false"
                    />
                  </td>
                  <td className="text-center">
                    <Form.Check
                      type="radio"
                      id=""
                      className="mb-2"
                      label=""
                      name="pregunta4"
                      value="true"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Después de contacto con el entorno del paciente</td>
                  <td className="text-center">
                    <Form.Check
                      type="radio"
                      id=""
                      className="mb-2"
                      label=""
                      name="pregunta5"
                      value="false"
                    />
                  </td>
                  <td className="text-center">
                    <Form.Check
                      type="radio"
                      id=""
                      className="mb-2"
                      label=""
                      name="pregunta5"
                      value="true"
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Form>
        </Row>
        <BarraPorcentajeBoton />
      </Container>
    </>
  );
};

export default ConstruccionFormulario;
