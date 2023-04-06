import { Container } from "react-bootstrap"

const Banner = () => {
  return (
    <>
      <Container fluid className="px-0">
        <section
          className="hero d-flex justify-content-center align-items-center"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <div className="text-center">
            <h1 className="pb-3 text-uppercase">Química & Instrumental</h1>
            <p className="pb-3 bannerParagraph d-none d-md-block">
              Proveemos insumos generales, equipamiento y reactivos para
              laboratorio
            </p>
            <a href="#contact" className="btn-hero border-0">
              Contacto
            </a>
          </div>
        </section>
      </Container>
    </>

  );
};

export default Banner;
