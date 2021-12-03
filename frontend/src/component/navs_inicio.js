import React from "react";
import { Nav, Navbar, Container, Offcanvas, NavDropdown } from "react-bootstrap";

function NavsInicio() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Navbar bg="primary" variant="dark" expand={false}>
      <Container>
        <Navbar.Brand href="#">
          <i class="fas fa-laptop-medical"></i>
        </Navbar.Brand>
        </Container>
    </Navbar>
  );
}

export default NavsInicio;
