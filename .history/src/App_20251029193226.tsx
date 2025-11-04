import Hero from "./components/Hero/Index";
import NewsTemplate from "./components/Template/NewsTemplate";
import DefaultTemplate from "./components/Template/DefaultTemplate";
// import Card from "./components/Card/index";

// import { videosApi } from "./api/videosApi";

function App() {
  return (
    <>
      <Hero />
      <NewsTemplate />

      <div className="col gap-4">
        <DefaultTemplate title="Photos"></DefaultTemplate>

        {/* <DefaultTemplate title="Videos">
          {videosApi.slice(0, renderNumber).map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </DefaultTemplate> */}

        <DefaultTemplate title="Shop Now"></DefaultTemplate>
      </div>
    </>
  );
}

export default App;
