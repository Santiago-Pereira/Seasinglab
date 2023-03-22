import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Container } from "react-bootstrap";

function Menu() {
  return (
    <Container>
        <Navbar fixed="top" expand="lg" className="nav-styles ">
        <Container>
          <Navbar.Brand>
            <img
              src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1677795133/Seasinglab/Proyecto_nuevo_1_supps8.png"
              className="d-inline-block align-top"
              alt="logo Seasinglab"
            />
          </Navbar.Brand>
             
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="collapse">
            <Nav className="ms-auto nav-links">
           
            
              <Nav.Link href="#us" className="nav-links">
                NOSOTROS
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-links">
                CONTACTO
              </Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
            </Container>
        </Navbar>
    </Container>
  );
}

export default Menu;
