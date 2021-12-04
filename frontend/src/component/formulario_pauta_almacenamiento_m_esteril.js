import React from "react";
import { Container, Row, Table, Form } from "react-bootstrap";
import BarraPorcentajeBoton from "./barra_porcentaje_boton_enviar";

const SupervisionMaterialEsteril = () => {
  return (
    <>
      <Container>
        <h1 className="text-center m-5">Supervision Almacenamiento Material Estéril</h1>
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
                <td>Superficie estantería y repisa esta limpio</td>
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
                <td>Material está con fecha esterilidad vigente</td>
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
                <td>El material esta ordenado de forma holgada</td>
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
                <td>Material se encuentra ordenado segun fecha de caducidad</td>
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
                <td>Material esta almacenado a 30cm del suelo y 1 metro del suelo</td>
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
              <tr>
                <td>Material estéril esta sin mezclar con otros materiales</td>
                <td className="text-center">
                  <Form.Check
                    type="radio"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta6"
                    value="true"
                  />
                </td>
                <td className="text-center">
                  <Form.Check
                    type="radio"
                    id=""
                    className="d-flex justify-content-center mb-2"
                    label=""
                    name="pregunta6"
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

export default SupervisionMaterialEsteril;
