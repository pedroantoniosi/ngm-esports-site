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
      <div className="grid-4">
        <DefaultTemplate
          products={camisas} // 👈 aqui você pode trocar para bones, acessorios etc.
          className="shop-container"
        />
        <DefaultTemplate
          products={bones} // 👈 aqui você pode trocar para bones, acessorios etc.
          className="shop-container"
        />
        <DefaultTemplate
          products={acessorios} // 👈 aqui você pode trocar para bones, acessorios etc.
          className="shop-container"
        />
      </div>
    </>
  );
}

export default App;
