const Banner = () => {
  return (
    <>
      {/* <!-- Hero section --> */}
      <section className="hero d-flex justify-content-center align-items-center"data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true">
        <div className="text-center">

          <h1 className="pb-3">Química & instrumental</h1>
          <p className="pb-3 bannerParagraph d-none d-md-block">Amplia variedad de marcas y productos a precios competitivos</p>
          <a href="#contact" className="btn-hero border-0 fs-6">
            SOLICITÁ COTIZACIÓN
          </a>
        </div>
      </section>
    </>
  );
};

export default Banner;
