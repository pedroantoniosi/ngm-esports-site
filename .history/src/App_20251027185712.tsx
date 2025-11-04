import Hero from "./components/Hero/Index";
import NewsTemplate from "./components/Template/NewsTemplate";
import DefaultTemplate from "./components/Template/DefaultTemplate";
// import Container from "./components/Container/Index";

function App() {
  return (
    <>
      <Hero />
      <NewsTemplate></NewsTemplate>
      <DefaultTemplate title={"Shop"}></DefaultTemplate>
      <DefaultTemplate title={"Galeria"}></DefaultTemplate>
      <DefaultTemplate title={"Categorias"}></DefaultTemplate>
    </>
  );
}

export default App;
