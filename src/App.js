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
import Marcas from "./components/Marcas";
import Clients from "./components/Clients";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
  return (
    <>

      <header>
        <Menu />
      </header>
      <main>
        <Banner />
        <Us />
        <Marcas />
        <ContactForm />
        <Clients />
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
