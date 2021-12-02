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
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pregunta1"
                      id="flexRadioDefault1"
                      value="true"
                    />
                  </td>
                  <td className="text-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pregunta1"
                      id="flexRadioDefault1"
                      value="false"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Antes de realizar una tarea aseptica</td>
                  <td className="text-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pregunta2"
                      id="flexRadioDefault1"
                    />
                  </td>
                  <td className="text-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pregunta2"
                      id="flexRadioDefault1"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Después de riesgo de exposicion a líquido corporales</td>
                  <td className="text-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pregunta3"
                      id="flexRadioDefault1"
                    />
                  </td>
                  <td className="text-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pregunta3"
                      id="flexRadioDefault1"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Después de tocar al paciente</td>
                  <td className="text-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pregunta4"
                      id="flexRadioDefault1"
                    />
                  </td>
                  <td className="text-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pregunta4"
                      id="flexRadioDefault1"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Después de contacto con el entorno del paciente</td>
                  <td className="text-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pregunta5"
                      id="flexRadioDefault1"
                    />
                  </td>
                  <td className="text-center">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pregunta5"
                      id="flexRadioDefault1"
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Form>
        </Row>
        <BarraPorcentajeBoton/>
      </Container>
    </>
  );
};

export default ConstruccionFormulario;
