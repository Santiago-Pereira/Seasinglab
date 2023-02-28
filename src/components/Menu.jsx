import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";

function Menu() {
  return (
    <Navbar fixed="top" expand="lg" className="nav-styles">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="#"
            className="d-inline-block align-top"
            alt="logo Seasinglab"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="collapse">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="#home" className="nav-links">
              INICIO
            </Nav.Link>
            <Nav.Link href="#link" className="nav-links">
              NOSOTROS
            </Nav.Link>
            <Nav.Link href="#home" className="nav-links">
              CONTACTO
            </Nav.Link>
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cat 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cat 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cat 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
