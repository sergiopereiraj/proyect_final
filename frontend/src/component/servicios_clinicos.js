import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ServiciosClinicos = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div classname="form-group">
            <label htmlFor="exampleFormControlSelect1">
              Seleccionar Servicio Clinico:
            </label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Procedimiento</option>
              <option>Box Curaciones</option>
              <option>Box Dental</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiciosClinicos;
