import Hero from "./components/Hero/Index";
import NewsTemplate from "./components/Template/NewsTemplate";
import DefaultTemplate from "./components/Template/DefaultTemplate";
import Card from "./components/Card/index";
import { shopApi } from "./api/shopApi";
import { photosApi } from "./api/photosApi";
import { videosApi } from "./api/videosApi";

function App() {
  const renderNumber = 5;

  return (
    <>
      <Hero />
      <NewsTemplate />

      <div className="card gap-4">
        <DefaultTemplate title="Photos">
          {photosApi.slice(0, renderNumber).map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </DefaultTemplate>

        {/* <DefaultTemplate title="Videos">
          {videosApi.slice(0, renderNumber).map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </DefaultTemplate> */}

        <DefaultTemplate title="Shop Now">
          {shopApi.slice(0, renderNumber).map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </DefaultTemplate>
      </div>
    </>
  );
}

export default App;
