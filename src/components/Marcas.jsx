import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const Marcas = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    className: "center",
    centerPadding: "60px",
    slidesToShow: 5,
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
      <Container className="clients-carousel min-vh-35 py-5">
        <Row>
          <Col>
            <h2 className="text-center fw-bold pb-2">
              Algunas de nuestras Marcas
            </h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <Slider {...settings}>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679250676/Seasinglab/anedra_a7gubo.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679250675/Seasinglab/biopack_rf4c4g.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679250676/Seasinglab/cicarelli_pvrerc.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679250676/Seasinglab/deltalab_pzmxqj.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679250677/Seasinglab/gamafil_n17ubr.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679250677/Seasinglab/glassco_z8inzf.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679250677/Seasinglab/iva_onwk3h.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679250677/Seasinglab/merck_nq1b0w.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679250677/Seasinglab/sanjor_ov1orz.png"
                  alt="logo"
                  loading="lazy"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dmatgvjjy/image/upload/v1679250677/Seasinglab/thermo_fsy4dg.png"
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

export default Marcas;
