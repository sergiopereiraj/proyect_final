import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import PerfilUsuarioPantalla2 from './component/perfil_usuario_pantalla2';
import ServiciosClinicos from './component/servicios_clinicos';
import FormularioLavado from './component/formulario_pauta_lavado_de_manos';
import BarraPorcentajeBoton from './component/barra_porcentaje_boton_enviar';
import AccesoAdministrador from './component/acceso_administrador';
import SolicitudesUsuarios from './component/solicitudes_usuarios';
import BuscadorUsuario from './component/buscador_usuarios';

function App() {
  return (
    <div className="App">
      <ServiciosClinicos/>
      <FormularioLavado/>
      <BarraPorcentajeBoton/>
      <AccesoAdministrador/>s
      <SolicitudesUsuarios/>
      <BuscadorUsuario/>
    </div>
  );
}

export default App;
