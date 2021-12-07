import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ConstruccionFormulario from "./component/construccion_form";
import CartaGraficos from "./component/carta_graficos";
import ServiciosClinicos from "./component/servicios_clinicos";
import FormularioLavado from "./component/formulario_pauta_lavado_de_manos";
import BarraPorcentajeBoton from "./component/barra_porcentaje_boton_enviar";
import AccesoAdministrador from "./component/acceso_administrador";
import SolicitudesUsuarios from "./component/solicitudes_usuarios";
import BuscadorUsuario from "./component/buscador_usuarios";
import ResultadosPautas from "./component/resultados_pautas";
import SelectPautas from "./component/select_pautas";
import BotonesMeses from "./component/botones_meses";
import Footer from "./component/footer";
import Navs from "./component/navs";
import injectContext from "./store/AppContent";
import Login from "./views/Login";
import UserLogin from "./componentesAntonio/UserLogIn";
import NavsInicio from "./component/navs_inicio";
import MyForm from "./componentesAntonio/Form";
import NavsDirector from "./component/navs_director";
import NavsUsuario from "./component/navs_usuario";
import { Context } from "../../store/AppContent";

const Layout = () => {
  return (
    <BrowserRouter>
      <NavsUsuario />
      <Switch>
        <Route exact path="/" component={CartaGraficos} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default injectContext(Layout);