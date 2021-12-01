import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ConstruccionFormulario = () => {
  return (
    <>
      <div className="container">
        <p className="text-center">Titulo Formulario</p>
        <div className="row">
          <table striped bordered hover size="sm" className="table border">
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
        <div className="row">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: "75%" }}
            />
          </div>
        </div>
        <button
          type="button"
          className="position-absolute top-50 start-50 btn btn-primary"
        >
          Enviar
        </button>
      </div>
    </>
  );
};

export default ConstruccionFormulario;
