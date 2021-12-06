import React from "react";
import { Nav, Navbar, Container, Offcanvas, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavsDirector() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Navbar bg="primary" variant="dark" expand={false}>
      <Container>
      <Navbar.Brand to="/" as={Link}>
          <i class="fas fa-laptop-medical"></i>
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
              <Nav.Link ><Link to="/direct/perfil" className="text-decoration-none">Perfil</Link></Nav.Link>
              <NavDropdown.Divider />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavsDirector;
