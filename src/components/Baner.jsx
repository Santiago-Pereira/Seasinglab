import React from "react";

const Baner = () => {
  return (
    <>
      {/* <!-- Hero section --> */}
      <section className="hero d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="fs-1 mb-3">SEASINGLAB</h1>
          <p className="fs-4 mb-3">Química & instrumental</p>
          <button id="btn-cotization" className="btn-hero border-0 fs-4">
            <a href="/#form" className="anchor-hero">
              Solicitá cotización
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Baner;
