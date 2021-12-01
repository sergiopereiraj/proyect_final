import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BarraPorcentajeBoton = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <p className="text-center">Titulo</p>
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

export default BarraPorcentajeBoton;
