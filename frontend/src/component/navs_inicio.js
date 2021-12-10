import React from "react";
import { Nav, Navbar, Container, Offcanvas, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"

function NavsInicio() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Navbar bg="primary" variant="dark" expand={false}>
      <Container>
        <Navbar.Brand href="#">
        <Link className="text-decoration-none text-white" to="/login"><i class="fas fa-laptop-medical"></i></Link>
        </Navbar.Brand>
        </Container>
    </Navbar>
  );
}

export default NavsInicio;
