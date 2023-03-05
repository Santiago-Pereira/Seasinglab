import React, { useRef } from "react";
import ButtonBanner from "./ButtonBanner";

const Banner = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* <!-- Hero section --> */}
      <section className="hero d-flex justify-content-center align-items-center">
        <div className="text-center">
          <div className="background-title">
            <h1 className="seasing-title mb-0">Seasinglab</h1>
            <p className="fs-4 ">Química & instrumental</p>
          </div>
          <button id="btn-cotization" className="btn-hero border-0 fs-6">
            <a href="/#form" className="anchor-hero">
              SOLICITÁ COTIZACIÓN
            </a>
          </button>
          <button onClick={handleClick}>Scroll down</button>

          <ButtonBanner ref={ref} />

        </div>
      </section>
    </>
  );
};

export default Banner;
