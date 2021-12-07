import React from "react";
import { Nav, Navbar, Container, Offcanvas, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavsAdmin() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Navbar bg="primary" variant="dark" expand={false}>
      <Container>
        <Navbar.Brand href="#">
        <Link className="text-decoration-none text-white" to="/admin/solicitudes-usuario"><i class="fas fa-laptop-medical"></i></Link>
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
              <Nav.Link href="#action1"><Link to="/admin/perfil" className="text-decoration-none">Perfil</Link></Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link href="#action1"><Link to="/admin/solicitudes-usuario" className="text-decoration-none">Solicitudes de Usuarios</Link></Nav.Link>
              <Nav.Link href="#action2"><Link to="/admin/solicitudes-usuario/registrar" className="text-decoration-none">Registro de Usuarios</Link></Nav.Link>
              <Nav.Link href="#action3"><Link to="/admin/buscador-usuario" className="text-decoration-none">Perfiles de Usuarios</Link></Nav.Link>
              <Nav.Link href="#action4"><Link to="/admin/construir-formulario" className="text-decoration-none">Pautas de Supervisión</Link></Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavsAdmin;
