import React from "react";
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
import SupervisionCortopunzante from "./component/formulario_pauta_eliminacion_cortopunzante";
import SupervisionMaterialEsteril from "./component/formulario_pauta_almacenamiento_m_esteril";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navs />
      <Switch>
        <Route exact path="/admin/solicitudes-usuario" component={SolicitudesUsuarios} /> {/*vista ad 1 */}
        <Route exact path="/admin/solicitudes-usuario/registrar" component={MyForm} /> {/*vista ad 2 */}
        <Route exact path="/admin/buscador-usuario" component={BuscadorUsuario} /> {/*vista ad 3 */}
        <Route exact path="/admin/construir-formulario" component={ConstruccionFormulario} /> {/*vista ad 4 */}
        <Route exact path="/admin/perfil" component={ConstruccionFormulario} /> {/*vista ad 5 */}
        <Route exact path="/direct/graficos-meses" component={CartaGraficos} /> {/*vista director 1 */}
        <Route exact path="/direct/resultados" component={ResultadosPautas} /> {/*vista director 2 */}
        <Route exact path="/direct/perfil" component={MyForm} /> {/*vista director 2 */}
        <Route exact path="/usuario/graficos-meses" component={CartaGraficos} /> {/*vista usuario 1 */}
        <Route exact path="/usuario/supervision-lavado-manos" component={FormularioLavado} /> {/*vista usuario lavado de manos */}
        <Route exact path="/usuario/supervision-cortopunante" component={SupervisionCortopunzante} /> {/*vista usuario cortopunzante */}
        <Route exact path="/usuario/supervision-almacenamiento-material-esteril" component={SupervisionMaterialEsteril} /> {/*vista usuario cortopunzante */}
        <Route exact path="/usuario/resultado" component={ResultadosPautas} /> {/*vista usuario 3 */}
        <Route exact path="/usuario/perfil" component={MyForm} /> {/*vista usuario 4 */}
        <Route exact path="/login" component={UserLogin} /> {/* Ingreso al portal */}       
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default injectContext(Layout);
