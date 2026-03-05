import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StandingsPage from "@/pages/standingsPage";
import News from "./pages/news";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/standingsPage" element={<StandingsPage />} />
          <Route path="/News" element={<News />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
