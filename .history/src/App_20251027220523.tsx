import Hero from "./components/Hero/Index";
import NewsTemplate from "./components/Template/NewsTemplate";
import DefaultTemplate from "./components/Template/DefaultTemplate";
import Card from "./components/Card/index";
import { shopData } from "./api/shopApi";
import { photosApi } from "./api/photosApi";
import { videosApi } from "./api//videosApi";

function App() {
  // Controle de quantos cards renderizar (ex: 3)
  const renderNumber = 4;

  return (
    <>
      <Hero />
      <NewsTemplate />

      <DefaultTemplate title="Photos"></DefaultTemplate>
      <DefaultTemplate title="Shop Now">
        {videosApi.slice(0, renderNumber).map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </DefaultTemplate>
      <DefaultTemplate title="Shop Now">
        {shopData.slice(0, renderNumber).map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </DefaultTemplate>
    </>
  );
}

export default App;
