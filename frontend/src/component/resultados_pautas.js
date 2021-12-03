import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import ServiciosClinicos from "./servicios_clinicos";
import SelectPautas from "./select_pautas";


const ResultadosPautas = () => {
  return (
    <>
      <Container>
        <Row  className="bg-white">
          <h1 className="text-center">Mes</h1>
          <ServiciosClinicos />
          <SelectPautas/>
          <Table striped bordered hover size="sm" className="table border">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Servicio Clinico</th>
                <th className="">Pauta</th>
                <th className="">Porcentaje</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15/2/2020</td>
                <td className="">---</td>
                <td className="">---</td>
                <td className="">---</td>
              </tr>
              <tr>
                <td>Fecha Random</td>
                <td className="">---</td>
                <td className="">---</td>
                <td className="">---</td>
              </tr>
              <tr>
                <td>Fecha Random</td>
                <td className="">---</td>
                <td className="">---</td>
                <td className="">---</td>
              </tr>
              <tr>
                <td>Fecha Random</td>
                <td className="">---</td>
                <td className="">---</td>
                <td className="">---</td>
              </tr>
              <tr>
                <td>Fecha Random</td>
                <td className="">---</td>
                <td className="">---</td>
                <td className="">---</td>
              </tr>
              <tr>
                <td>Fecha Random</td>
                <td className="">---</td>
                <td className="">---</td>
                <td className="">---</td>
              </tr>
              <tr>
                <td>Fecha Random</td>
                <td className="">---</td>
                <td className="">---</td>
                <td className="">---</td>
              </tr>
              <tr>
                <td>Fecha Random</td>
                <td className="">---</td>
                <td className="">---</td>
                <td className="">---</td>
              </tr>
              <tr>
                <td>Fecha Random</td>
                <td className="">---</td>
                <td className="">---</td>
                <td className="">---</td>
              </tr>
              <tr>
                <td>Fecha Random</td>
                <td className="">---</td>
                <td className="">---</td>
                <td className="">---</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};

export default ResultadosPautas;
