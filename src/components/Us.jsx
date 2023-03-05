import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Us() {
  return (
    <Container className="d-flex align-items-center us">
      <Row>
        <Col sm={12} md={6} className="d-flex flex-column align-items-center">
          <h3 className="text-center text-uppercase">Quiénes somos</h3>
          <img
            src={
              "https://res.cloudinary.com/dmatgvjjy/image/upload/v1677789156/Seasinglab/flask_rhcf1z.png"
            }
            alt="flask-icon"
            className="img-fluid flask"
            loading="lazy"
          />
          <p className="mt-5 paragraph-us">
            "En Seasinglab Química & Instrumental nos dedicamos a la venta de
            insumos de alta calidad para laboratorios de investigación. Nos
            orgullecemos de ofrecer a nuestros clientes una amplia selección de
            productos y suministros, desde equipos especializados hasta
            reactivos y materiales de vidrio.
          </p>
          <p className="paragraph-us">
            Nos esforzamos por brindar un servicio excepcional a nuestros
            clientes. Nuestro equipo altamente capacitado y experimentado está
            aquí para ayudarlo con cualquier pregunta que tenga sobre nuestros
            productos, así como para proporcionar asistencia técnica y
            asesoramiento especializado.
          </p>
        </Col>
        <Col sm={12} md={6} className="d-flex flex-column align-items-center">
          <h3 className="text-center text-uppercase">Nuestra misión</h3>
          <img
            src={
              "https://res.cloudinary.com/dmatgvjjy/image/upload/v1677789156/Seasinglab/flask_rhcf1z.png"
            }
            alt="flask-icon"
            className="img-fluid"
            loading="lazy"
          />
          <p className="mt-5 paragraph-us">
            Nuestra misión hace más de 30 años es proporcionar soluciones
            innovadoras y eficaces para las necesidades de investigación de
            nuestros clientes. Trabajamos estrechamente con nuestros proveedores
            y fabricantes para asegurarnos de que ofrecemos productos de la más
            alta calidad y al mejor precio posible.
          </p>
          <p className="paragraph-us">
            Gracias por elegir Seasinglab. Esperamos poder ayudarlo a satisfacer
            sus necesidades de investigación y ser su proveedor de confianza
            para los insumos de laboratorio."
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Us;
