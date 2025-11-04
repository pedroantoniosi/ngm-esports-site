import Hero from "./components/Hero/Index";
import News from "./components/News/Index";
import NewsTemplate from "./components/Template/NewsTemplate";
import Container from "./components/Container/Index";

function App() {
  return (
    <>
      <Hero />
      <Container>
        <NewsTemplate>
          <News />
        </NewsTemplate>
      </Container>
    </>
  );
}

export default App;
