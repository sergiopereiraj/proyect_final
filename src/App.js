import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import PerfilUsuarioPantalla2 from './component/perfil_usuario_pantalla2';
import ServiciosClinicos from './component/servicios_clinicos';
import FormularioLavado from './component/formulario_pauta_lavado_de_manos';

function App() {
  return (
    <div className="App">
      <ServiciosClinicos/>
      <FormularioLavado/>

    </div>
  );
}

export default App;
