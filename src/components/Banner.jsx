const Banner = () => {
  return (
    <>
      {/* <!-- Hero section --> */}
      <section className="hero d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="fs-4 pb-3">Química & instrumental</h1>
          <button
            id="btn-cotization rounded"
            className="btn-hero border-0 fs-6"
          >
            <a href="/#form" className="anchor-hero">
              SOLICITÁ COTIZACIÓN
            </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Banner;
