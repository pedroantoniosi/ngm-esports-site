import Hero from "./components/Hero/Index";
import NewsTemplate from "./components/Template/NewsTemplate";
import DefaultTemplate from "./components/Template/DefaultTemplate";
import Card from "./components/Card/index";
import { shopData } from "./api/shopApi";
import { photosApi } from "./api/photosApi";
import { videosApi } from "./api/videosApi";

function App() {
  const renderNumber = 4;

  return (
    <>
      <Hero />
      <NewsTemplate />

      <DefaultTemplate title="Photos">
        {photosApi.slice(0, renderNumber).map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </DefaultTemplate>

      <DefaultTemplate title="Videos">
        {videosApi.slice(0, renderNumber).map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </DefaultTemplate>
    </>
  );
}

export default App;
