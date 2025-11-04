import Hero from "./components/Hero/Index";
import NewsTemplate from "./components/Template/NewsTemplate";
import DefaultTemplate from "./components/Template/DefaultTemplate";
import Card from "./components/Card/index";
import { shopData } from "./api/shopApi"; // 👈 importa os dados

function App() {
  // Controle de quantos cards renderizar (ex: 3)
  const renderNumber = 4;

  return (
    <>
      <Hero />
      <NewsTemplate />

      <DefaultTemplate title="Galeria"></DefaultTemplate>
      <DefaultTemplate title="Categorias"></DefaultTemplate>
      <DefaultTemplate title="Shop Now">
        {shopData.slice(0, renderNumber).map((item, index) => (
          <Card key={index} img={item.img} title={item.title} />
        ))}
      </DefaultTemplate>
    </>
  );
}

export default App;
