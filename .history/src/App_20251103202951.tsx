import Hero from "./components/Hero/Index";
import NewsTemplate from "./components/Template/NewsTemplate";
import DefaultTemplate from "./components/Template/DefaultTemplate";

// ✅ Agora você pode importar o que quiser de forma centralizada
// Junta todos os produtos em um único array
const allProducts = [...camisas, ...bones, ...acessorios];

function App() {
  return (
    <>
      <Hero />
      <NewsTemplate></NewsTemplate>
      <div className="shop-wrapper grid-3">
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
