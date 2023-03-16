import Menu from "./components/Menu";
import SectionFooter from "./components/SectionFooter";
import Banner from "./components/Banner";
import Us from "./components/Us";
import CopyRight from "./components/CopyRight";
import Whatsapp from "./components/Whatsapp";
import BackToTop from "./components/BackToTop";
import BrandsCarousel from "./components/BrandsCarousel";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <Banner />
        <Us />
        <BrandsCarousel />
        <ContactForm id="scroll-down" />
      </main>
      <footer>
        <SectionFooter />
      </footer>
      <CopyRight />
      <BackToTop />
      <Whatsapp />
    </>
  );
}

export default App;
