import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Random from "./pages/Random";
import Result from "./pages/Result";
import Data from "./pages/Data";
import Login from "./pages/Login";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<Random />} />
        <Route path="/result" element={<Result />} />
        <Route path="/data" element={<Data />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
