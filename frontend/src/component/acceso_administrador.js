import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AccesoAdministrador = () => {
  return (
    <div className="container">
      <div class="btn-group-vertical">
        <button type="button" class="btn btn-primary m-1">
          Registrar Usuario
        </button>
        <button type="button" class="btn btn-primary m-1">
          Solicitudes de Usuario
        </button>
        <button type="button" class="btn btn-primary m-1">
          Perfil de Usuario
        </button>
        <button type="button" class="btn btn-primary m-1">
          Pauta de Supervision
        </button>
      </div>
    </div>
  );
};

export default AccesoAdministrador;
