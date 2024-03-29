import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Us() {
  return (
    <Container
      fluid
      id="us"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <Container className="d-flex align-items-center min-vh-100 py-5">
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={5}
            className="d-flex flex-column align-items-center us-border p-5 mx-lg-5 m-4"
          >
            <h3 className="text-center text-uppercase fw-bold">
              Quiénes somos
            </h3>
            <img
              src={
                "https://res.cloudinary.com/dmatgvjjy/image/upload/v1679079604/Seasinglab/ezgif.com-gif-to-apng_bbuecj.png"
              }
              alt="flask-icon"
              className="img-fluid flask"
              loading="lazy"
            />
            <p className="mt-5 paragraph-us">
              En Seasinglab Química & Instrumental nos dedicamos a la venta de
              insumos de alta calidad para laboratorios de investigación.{" "}
            </p>
            <p className="paragraph-us">
              Nos orgullecemos de ofrecer a nuestros clientes una amplia
              selección de productos y suministros, desde equipos especializados
              hasta reactivos y materiales de vidrio.
            </p>
            <p className="paragraph-us">
              Nos esforzamos por brindar un servicio excepcional a nuestros
              clientes.
            </p>
            <p className="paragraph-us">
              {" "}
              Nuestro equipo altamente capacitado y experimentado está aquí para
              ayudarlo con cualquier pregunta que tenga sobre nuestros
              productos, así como para proporcionar asistencia técnica y
              asesoramiento especializado.
            </p>
          </Col>
          <Col
            sm={12}
            md={5}
            className="d-flex flex-column align-items-center us-border p-5 mx-lg-5 m-4"
          >
            <h3 className="text-center text-uppercase fw-bold mt-5 mt-md-0">
              Nuestra misión
            </h3>
            <img
              src={
                "https://res.cloudinary.com/dmatgvjjy/image/upload/v1679079604/Seasinglab/ezgif.com-gif-to-apng_bbuecj.png"
              }
              alt="flask-icon"
              className="img-fluid flask"
              loading="lazy"
            />
            <p className="mt-5 paragraph-us">
              Nuestra misión hace más de 30 años es proporcionar soluciones
              innovadoras y eficaces para las necesidades de investigación de
              nuestros clientes.
            </p>
            <p className="paragraph-us">
              Trabajamos estrechamente con nuestros proveedores y fabricantes
              para asegurarnos de que ofrecemos productos de la más alta calidad
              y al mejor precio posible.
            </p>
            <p className="paragraph-us">
              Esperamos poder ayudarlo a satisfacer sus necesidades de
              investigación y ser su proveedor de confianza para los insumos de
              laboratorio.
            </p>
            <p className="mt-md-4 paragraph-us fw-bold text-uppercase fs-5">
              Gracias por elegir Seasinglab!
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Us;
