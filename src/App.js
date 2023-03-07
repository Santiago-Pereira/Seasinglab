import Menu from "./components/Menu";
import SectionFooter from "./components/SectionFooter";
import Banner from "./components/Banner";
import Us from "./components/Us";
import CopyRight from "./components/CopyRight";
import Form from "./components/Form";
import Whatsapp from "./components/Whatsapp";
import BackToTop from "./components/BackToTop";
import BrandsCarousel from "./components/BrandsCarousel";

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
        <Form id="scroll-down" />
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
