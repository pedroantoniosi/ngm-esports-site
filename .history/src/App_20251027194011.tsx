import Hero from "./components/Hero/Index";
import NewsTemplate from "./components/Template/NewsTemplate";
import DefaultTemplate from "./components/Template/DefaultTemplate";
import Card from "./components/Card/index";
// import Container from "./components/Container/Index";

function App() {
  return (
    <>
      <Hero />
      <NewsTemplate></NewsTemplate>
      <DefaultTemplate title={"Shop Now"}>
        <Card img={"./assets/img/shop.png"} />
        <Card img={""} />
        <Card img={""} />
        <Card img={""} />
      </DefaultTemplate>
      <DefaultTemplate title={"Galeria"}></DefaultTemplate>
      <DefaultTemplate title={"Categorias"}></DefaultTemplate>
    </>
  );
}

export default App;
