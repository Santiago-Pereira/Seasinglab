import React from "react";
import Container from "react-bootstrap/Container";

const CopyRight = () => {
  return (
    <Container fluid className="m-0 p-0">
      <p className="copyright text-center">
        © 2023. Seasinglab Tandil. Todos los derechos reservados. Hecho por{" "}
        <a
          href="https://www.linkedin.com/in/lis-medina/"
          target={"_blank"}
          className="copyright"
        >
          Lis Medina
        </a>{" "}
        y{" "}
        <a href="#" target={"_blank"} className="copyright">
          Santiago Pereira
        </a>
      </p>
    </Container>
  );
};

export default CopyRight;
