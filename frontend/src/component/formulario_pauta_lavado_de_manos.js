import React, { useRef, useState } from "react";
import { Container, Row, Table, Form } from "react-bootstrap";
import BarraPorcentajeBoton from "./barra_porcentaje_boton_enviar";

const FormularioLavado = () => {

  const progressChild = useRef();

  const [bool1, setBool1] = useState(false);
  const [bool2, setBool2] = useState(false);
  const [bool3, setBool3] = useState(false);
  const [bool4, setBool4] = useState(false);
  const [bool5, setBool5] = useState(false);

  

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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Antes de tocar al Paciente</td>
                <td className="">
                  <Form.Check
                    type="checkbox"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta1"
                    value={bool1}
                    onChange={() => {
                      if (!bool1) {
                        console.log("addProgress");
                        progressChild.current.addToProgress(20);
                      } else {
                        console.log("removeProgress");
                        progressChild.current.removeFromProgress(20);
                      }
                      setBool1(!bool1);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Antes de realizar una tarea aseptica</td>
                <td className="text-center">
                  <Form.Check
                    type="checkbox"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta2"
                    value={bool2}
                    onChange={() => {
                      if (!bool2) {
                        progressChild.current.addToProgress(20);
                      } else {
                        progressChild.current.removeFromProgress(20);
                      }
                      setBool2(!bool2);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Después de riesgo de exposicion a líquido corporales</td>
                <td className="text-center">
                  <Form.Check
                    type="checkbox"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta3"
                    value={bool3}
                    onChange={() => {
                      if (!bool3) {
                        progressChild.current.addToProgress(20);
                      } else {
                        progressChild.current.removeFromProgress(20);
                      }
                      setBool3(!bool3);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Después de tocar al paciente</td>
                <td className="text-center">
                  <Form.Check
                    type="checkbox"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta4"
                    value={bool4}
                    onChange={() => {
                      if (!bool4) {
                        progressChild.current.addToProgress(20);
                      } else {
                        progressChild.current.removeFromProgress(20);
                      }
                      setBool4(!bool4);
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Después de contacto con el entorno del paciente</td>
                <td className="text-center">
                  <Form.Check
                    type="checkbox"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta5"
                    value={bool5}
                    onChange={() => {
                      if (!bool5) {
                        progressChild.current.addToProgress(20);
                      } else {
                        progressChild.current.removeFromProgress(20);
                      }
                      setBool5(!bool5);
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <BarraPorcentajeBoton ref={progressChild}/>
      </Container>
    </>
  );
};

export default FormularioLavado;
