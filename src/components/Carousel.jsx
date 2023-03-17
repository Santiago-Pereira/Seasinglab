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
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        

      
    };
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center">Algunos de nuestros clientes</h2>
                    </Col>
                </Row>
            </Container>
            <div>
                <Slider {...settings}>
                    <div>
                        <img src="./images/cagnoli.png" alt="logo" loading="lazy" />
                    </div>

                    <div>
                        <img src="./images/cagnoli.png" alt="logo" loading="lazy" />
                    </div>
                    <div>
                        <img src="./images/cagnoli.png" alt="logo" loading="lazy" />
                    </div>
                    <div>
                        <img src="./images/cagnoli.png" alt="logo" loading="lazy" />
                    </div>
                    <div>
                        <img src="./images/cagnoli.png" alt="logo" loading="lazy" />
                    </div>
                    <div>
                        <img src="./images/cagnoli.png" alt="logo" loading="lazy" />
                    </div>
                    <div>
                        <img src="./images/cagnoli.png" alt="logo" loading="lazy" />
                    </div>
                    <div>
                        <img src="./images/cagnoli.png" alt="logo" loading="lazy" />
                    </div>
                    <div>
                        <img src="./images/cagnoli.png" alt="logo" loading="lazy" />
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default Carousel