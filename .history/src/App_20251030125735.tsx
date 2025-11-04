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
        <DefaultTemplate
          title="Shop Now"
          products={[camisas]}
          className="shop-container"
        />
      </div>
    </>
  );
}

export default App;
