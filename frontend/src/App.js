import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartaGraficosBotones from './component/carta_grafico_ybotones';
import ServiciosClinicos from './component/servicios_clinicos';
import FormularioLavado from './component/formulario_pauta_lavado_de_manos';
import BarraPorcentajeBoton from './component/barra_porcentaje_boton_enviar';
import AccesoAdministrador from './component/acceso_administrador';
import SolicitudesUsuarios from './component/solicitudes_usuarios';
import BuscadorUsuario from './component/buscador_usuarios';
import ConstruccionFormulario from './component/construccion_form';
import ResultadosPautas from './component/resultados_pautas';


function App() {
  return (
    <div className="App">
      <ResultadosPautas/>
    </div>
  );
}

export default App;
