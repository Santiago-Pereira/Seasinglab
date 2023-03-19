import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const Carousel = () => {
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
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
                <img src="./images/cagnoli.png" alt="logo" loading="lazy" />
              </div>

              <div>
                <img
                  src=".\images\anedra-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src=".\images\biopack-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src=".\images\cica-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src=".\images\delta-no-back3.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src=".\images\gamafil-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src=".\images\glassco-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src=".\images\iva-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src=".\images\merck-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src=".\images\sanjor-no-back.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src=".\images\thermo.png"
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

export default Carousel;
