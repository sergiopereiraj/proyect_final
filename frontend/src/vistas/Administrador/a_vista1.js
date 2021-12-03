import logo from "./logo.svg";
import CartaGraficos from "../../component/carta_graficos";
import ServiciosClinicos from "../../component/servicios_clinicos";
import FormularioLavado from "../../component/formulario_pauta_lavado_de_manos";
import BarraPorcentajeBoton from "../../component/barra_porcentaje_boton_enviar";
import AccesoAdministrador from "../../component/acceso_administrador";
import SolicitudesUsuarios from "./component/solicitudes_usuarios";
import BuscadorUsuario from "./component/buscador_usuarios";
import ConstruccionFormulario from "./component/construccion_form";
import ResultadosPautas from "../../component/resultados_pautas";
import SelectPautas from "../../component/select_pautas";
import BotonesMeses from "../../component/botones_meses";
import Navs from "../../component/navs";

function VistaUnoAdministrador() {
  return (
    <div className="">
        <Navs />
        <SolicitudesUsuarios/>
        <Footer />
    </div>
  );
}

export default VistaUnoAdministrador;