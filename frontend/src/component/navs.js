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

const Navs = () => {
  const { store, actions } = useContext(Context);
  if (store.currentUser.user.role[0].name === "Usuario") {
    return <NavsUsuario />;
  } else if (store.currentUser.user.role[0].name === "Admin") {
    return <NavsAdmin />;
  } else if (store.currentUser.user.role[0].name === "Director") {
    return <NavsAdmin />;
  } else return <NavsInicio />;
};

export default Navs;
