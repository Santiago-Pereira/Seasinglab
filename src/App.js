import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Baner from "./components/Baner";
import Us from "./components/Us";
import CopyRight from "./components/CopyRight";
import Form from "./components/Form";

function App() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <Baner />
        <Us />
        <Form />
      </main>
      <footer>
        <Footer />
      </footer>
      <CopyRight />
    </>
  );
}

export default App;
