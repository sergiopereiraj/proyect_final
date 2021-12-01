import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ServiciosClinicos from "./servicios_clinicos";

const ResultadosPautas = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center">Mes</h1>
          <ServiciosClinicos />
          <table striped bordered hover size="sm" className="table border">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Cumple</th>
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
                  />
                </td>
                <td className="text-center">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="pregunta1"
                    id="flexRadioDefault1"
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
          </table>
        </div>
      </div>
    </>
  );
};

export default ResultadosPautas;
