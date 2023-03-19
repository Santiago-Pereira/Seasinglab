import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const Clients = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    className: "center",
    centerPadding: "60px",
    slidesToShow: 5,
    centerMode: true,
    cssEase: "linear",
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    // afterChange: function (index) {
    //     console.log(
    //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //     );
    // }
  };
  return (
    <>
      <Container className="clients-carousel min-vh-100">
        <Row>
          <Col>
            <h2 className="text-center">Algunos de nuestros clientes</h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <Slider {...settings}>
              <div>
                <img
                  src="./images/clientes/advanta-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>

              <div>
                <img
                  src="./images/clientes/amcor-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="./images/clientes/cagnoli-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="./images/clientes/conicet-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="./images/clientes/Elanco.svg.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="./images/clientes/advanta-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="./images/clientes/inia-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="./images/clientes/inidep-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="./images/clientes/inta.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="./images/clientes/latu-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="./images/clientes/inti-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="./images/clientes/Logo-Biogenesis-bago.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="./images/clientes/loma-negra-logo.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="./images/clientes/monsanto-2.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="./images/clientes/zoovac-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Clients;
