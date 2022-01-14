import React, { useContext } from "react";
import NavsAdmin from "./navs_admin";
import NavsInicio from "./navs_inicio";
import NavsUsuario from "./navs_usuario";
import { Context } from "../store/AppContent";
import NavsDirector from "./navs_director";

const Navs = () => {
  const { store } = useContext(Context);
  
  if (!!store.currentUser && store.currentUser.user.roles.find(role => role.name === "user")) {
    return <NavsUsuario />;
  } else if (!!store.currentUser && store.currentUser.user.roles.find(role => role.name === "admin")) {
    return <NavsAdmin />;
  } else if (!!store.currentUser && store.currentUser.user.roles.find(role => role.name === "director")) {
    return <NavsDirector />;
  } else return <NavsDirector />;
};

export default Navs;
