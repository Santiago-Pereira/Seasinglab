import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const Clients = () => {
  const settings = {
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    className: "center",
    centerPadding: "60px",
    slidesToShow: 5,
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
      <Container className="clients-carousel min-vh-35 py-5">
        <Row>
          <Col>
            <h2 className="text-center fw-bold pb-2">
              Algunos de nuestros clientes
            </h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <Slider {...settings}>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679253375/Seasinglab/clientes/amcor_zahdhc.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679253375/Seasinglab/clientes/cagnoli_vqt3zf.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679253374/Seasinglab/clientes/elanco_dwc7pz.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679253375/Seasinglab/clientes/advanta_vskxwa.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679253375/Seasinglab/clientes/inti_mskoej.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679253375/Seasinglab/clientes/inidep_vzshun.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679253375/Seasinglab/clientes/biopack_xbedf7.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679253375/Seasinglab/clientes/inta_luiosd.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679253375/Seasinglab/clientes/latu_oq7ku6.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679253375/Seasinglab/clientes/inti_mskoej.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>

              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679253375/Seasinglab/clientes/loma_zhwfao.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679253376/Seasinglab/clientes/monsanto_d1diqm.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679253376/Seasinglab/clientes/zoovac_ymmfa2.png"
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
