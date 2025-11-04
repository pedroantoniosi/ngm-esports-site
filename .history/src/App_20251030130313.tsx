import Hero from "./components/Hero/Index";
import NewsTemplate from "./components/Template/NewsTemplate";
import DefaultTemplate from "./components/Template/DefaultTemplate";

// ✅ Agora você pode importar o que quiser de forma centralizada
import { camisas, bones, acessorios } from "./api";

function App() {
  return (
    <>
      <Hero />
      <NewsTemplate />

      <div className="col gap-4">
        <DefaultTemplate
          title="Shop Now"
          products={camisas} // 👈 aqui você pode trocar para bones, acessorios etc.
          className="shop-container"
        />
      </div>
    </>
  );
}

export default App;
