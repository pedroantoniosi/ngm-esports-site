import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/news/News";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<News />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
