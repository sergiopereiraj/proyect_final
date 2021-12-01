import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FormularioLavado = () => {
  return (
    <>
      <div className="container">
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
                <td className="text-center"><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/></td>
                <td className="text-center"><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/></td>
              </tr>
              <tr>
                <td>Antes de realizar una tarea aseptica</td>
                <td className="text-center"><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /></td>
                <td className="text-center"><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /></td>
              </tr>
              <tr>
                <td>Después de riesgo de exposicion a líquido corporales</td>
                <td className="text-center"><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /></td>
                <td className="text-center"><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /></td>
              </tr>
              <tr>
                <td>Después de tocar al paciente</td>
                <td className="text-center"><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /></td>
                <td className="text-center"><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /></td>
              </tr>
              <tr>
                <td>Después de contacto con el entorno del paciente</td>
                <td className="text-center"><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /></td>
                <td className="text-center"><input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FormularioLavado;
