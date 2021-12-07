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
              <Nav.Link href="#action1">Perfil</Nav.Link>
              <NavDropdown.Divider />
              <Nav.Link href="#action1">Solicitudes de Usuarios</Nav.Link>
              <Nav.Link href="#action2">Registro de Usuarios</Nav.Link>
              <Nav.Link href="#action3">Perfiles de Usuarios</Nav.Link>
              <Nav.Link href="#action4">Pautas de Supervisión</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavsAdmin;
