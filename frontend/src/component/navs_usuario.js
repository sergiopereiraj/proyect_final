import React, { useContext } from "react";
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function NavsUsuario() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Navbar bg="primary" variant="dark" expand={false}>
      <Container>
        <Navbar.Brand to="/" as={Link}>
          <Link className="text-decoration-none text-white" to="/usuario/graficos-meses"><i class="fas fa-laptop-medical"></i></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1"><Link className="text-decoration-none" to="/usuario/perfil">Perfil</Link></Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link>
                <Link className="text-decoration-none" to="/usuario/graficos-meses">
                  Acceso
                </Link>
              </Nav.Link>
              <NavDropdown title="Pautas" id="offcanvasNavbarDropdown">
                <NavDropdown.Item>
                  <Link
                    className="text-decoration-none"
                    to="/usuario/supervision-lavado-manos"
                  >
                    Lavado de Manos
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="text-decoration-none"
                    to="/usuario/supervision-cortopunante"
                  >
                    {" "}
                    Eliminacion de Material Cortopunzante
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="text-decoration-none"
                    to="/usuario/supervision-almacenamiento-material-esteril"
                  >
                    {" "}
                    Almacenamiento de Material Esteril
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/usuario/resultado" className="text-decoration-none">
                  Resultado
                </Link>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavsUsuario;
