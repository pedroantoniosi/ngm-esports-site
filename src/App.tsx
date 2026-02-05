import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StandingsPage from "@/pages/standingsPage";
import Login from "@/pages/login/Login";
import News from "./pages/news/News";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/standingsPage" element={<StandingsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/News" element={<News />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
