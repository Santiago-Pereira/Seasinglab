import Menu from "./components/Menu";
import SectionFooter from "./components/SectionFooter";
import Banner from "./components/Banner";
import Us from "./components/Us";
import CopyRight from "./components/CopyRight";
import Whatsapp from "./components/Whatsapp";
import BackToTop from "./components/BackToTop";
import ContactForm from "./components/ContactForm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./components/Carousel";
import Brands from "./components/Brands";

function App() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <Banner />
        <Us />
        {/* <Carousel/> */}
        <ContactForm id="scroll-down" />
        {/* <Brands/> */}
      </main>
      <footer>
        <SectionFooter />
        <CopyRight />
        <BackToTop />
        <Whatsapp />
      </footer>
    </>
  );
}

export default App;
