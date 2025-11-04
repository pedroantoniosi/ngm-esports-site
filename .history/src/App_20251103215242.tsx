import Navbar from "./components/Navbar/Index";
import Hero from "./components/Hero/Index";
import NewsTemplate from "./components/Template/NewsTemplate";
import DefaultTemplate from "./components/Template/DefaultTemplate";
import Footer  from "./components/Footer/Index";
import { camisas } from "./api/camisas";
import { bones } from "./api/bones";
import { acessorios } from "./api/acessorios";

// ✅ Agora você pode importar o que quiser de forma centralizada
// Junta todos os produtos em um único array
const allProducts = [...camisas, ...bones, ...acessorios];

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewsTemplate></NewsTemplate>
      <div className="shop-wrapper ">
        <DefaultTemplate
          title="Shop Now"
          products={allProducts}
          className="shop-container"
        />
      </div>
      <Footer />>
    </>
  );
}

export default App;
