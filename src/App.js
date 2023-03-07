import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Us from "./components/Us";
import CopyRight from "./components/CopyRight";
import Form from "./components/Form";
import Whatsapp from "./components/Whatsapp";
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
        <Whatsapp />
        <Footer />
      </footer>
      <CopyRight />
    </>
  );
}

export default App;
