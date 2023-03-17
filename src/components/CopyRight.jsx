import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CopyRight = () => {
  return (
    <Container fluid className="copy-container py-3">
      <Row>
        <Col>
          <p className="copyright text-center m-0">
            © 2023. Seasinglab Tandil. Todos los derechos reservados. Hecho por{" "}
            <a
              href="https://www.linkedin.com/in/lis-medina/"
              target={"_blank"}
              className="copyright"
              rel="noreferrer"
            >
              Lis Medina
            </a>{" "}
            y{" "}
            <a
              href="https://www.linkedin.com/in/santiago-pereira-994229244/"
              target={"_blank"}
              className="copyright"
              rel="noreferrer"
            >
              Santiago Pereira
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CopyRight;
