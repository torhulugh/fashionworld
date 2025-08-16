import { BrowserRouter, Routes, Route } from "react-router";
import Clothes from "./Pages/Clothes/Clothes";
import Measurements from "./Pages/Measurements/Measurements";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Clothes />} />
        <Route path="/measurements" element={<Measurements />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
