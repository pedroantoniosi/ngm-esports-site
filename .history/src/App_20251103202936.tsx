import Hero from "./components/Hero/Index";
import NewsTemplate from "./components/Template/NewsTemplate";
import DefaultTemplate from "./components/Template/DefaultTemplate";

// ✅ Agora você pode importar o que quiser de forma centralizada
import { camisas, bones, acessorios } from "./api/Index";

function App() {
  return (
    <>
      <Hero />
      <NewsTemplate></NewsTemplate>
      <div className="shop-wrapper">
        <DefaultTemplate
          title="Shop Now"
          products={allProducts}
          className="shop-container"
        />
      </div>
    </>
  );
}

export default App;
