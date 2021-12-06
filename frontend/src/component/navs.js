import React from "react";
import ReactDOM  from "react-dom";
import MyForm from "../componentesAntonio/Form";
import UserLogin from "../componentesAntonio/UserLogIn";
import BuscadorUsuario from "./buscador_usuarios";
import ConstruccionFormulario from "./construccion_form";
import NavsAdmin from "./navs_admin";
import NavsInicio from "./navs_inicio";
import NavsUsuario from "./navs_usuario";
import PerfilDirector from "./perfil_director";
import SolicitudesUsuarios from "./solicitudes_usuarios";

const Navs = () => {
    
  if (<UserLogin /> === true) {
    return <NavsInicio />;
  } else if (
    ((<SolicitudesUsuarios />),
    (<MyForm />),
    (<BuscadorUsuario />),
    (<ConstruccionFormulario />),
    <PerfilDirector /> === true)
  ) {
    return <NavsAdmin />;
  } else return <NavsUsuario />;
};

export default Navs;
