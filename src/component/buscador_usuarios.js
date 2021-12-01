import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BuscadorUsuario = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <table striped bordered hover size="sm" className="table border">
            <thead>
              <tr>
                <th>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Nombre Usuario:
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre Apellido"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Usuario1:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario2:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario3:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario4:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario5:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario6:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario7:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario8:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario9:</td>
                <td className="text-center">---</td>
              </tr>
              <tr>
                <td>Usuario10:</td>
                <td className="text-center">---</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BuscadorUsuario;
