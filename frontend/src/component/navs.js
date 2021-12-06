import React, { useContext } from "react";
import MyForm from "../componentesAntonio/Form";
import UserLogin from "../componentesAntonio/UserLogIn";
import BuscadorUsuario from "./buscador_usuarios";
import ConstruccionFormulario from "./construccion_form";
import NavsAdmin from "./navs_admin";
import NavsInicio from "./navs_inicio";
import NavsUsuario from "./navs_usuario";
import PerfilDirector from "./perfil_director";
import SolicitudesUsuarios from "./solicitudes_usuarios";
import { Context } from "../store/AppContent";
import NavsDirector from "./navs_director";

const Navs = () => {
  const { store, actions } = useContext(Context);
  
  if (!!store.currentUser && store.currentUser.user.role.find(role => role.name === "Usuario")) {
    return <NavsUsuario />;
  } else if (!!store.currentUser && store.currentUser.user.role.find(role => role.name === "Admin")) {
    return <NavsAdmin />;
  } else if (!!store.currentUser && store.currentUser.user.role.find(role => role.name === "Director")) {
    return <NavsDirector />;
  } else return <NavsInicio />;
};

export default Navs;
