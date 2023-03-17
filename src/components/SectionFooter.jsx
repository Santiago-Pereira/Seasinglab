import React from "react";
import { Col, Row, Container } from "react-bootstrap";

// TODO MOVER LAS IMG DENTRO DE LOS A !
function SectionFooter() {
  return (
    <Container /* className="d-flex justify-content-center" */>
      <Row>
        <Col sm={12} md={4} lg={4} className="footer-general">
          <img
            src="./images/envelope.png"
            className="footer-icons-styles img-fluid"
            alt="email icon "
            loading="lazy"
          />
          <a
            href="mailto:seasinglab@gmail.com"
            className="footer-styles"
            target="_blank"
            rel="noreferrer"

          >
            seasinglab@gmail.com
          </a>
        </Col>
        <Col sm={12} md={4} lg={4} className="footer-general">
          <img
            src="./images/smartphone.png"
            className="footer-icons-styles img-fluid"
            alt="tel icon"
            loading="lazy"
          />
          <a
            href="tel:+54-2494-620208"
            className="footer-styles"
            target="_blank"
            rel="noreferrer"
          >+54-2494-620208</a>
        </Col>
        <Col sm={12} md={4} lg={4} className="footer-general">
          <img
            src="./images/pin.png"
            className="footer-icons-styles img-fluid"
            alt="location icon"
            loading="lazy"
          />
          <a
            href="https://goo.gl/maps/n2xay5vZgqF9rPGDA"
            className="footer-styles"
            target="_blank"
            rel="noreferrer"
          >
            José Hernández 361, (7000) Tandil, BsAs-Argentina
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionFooter;
