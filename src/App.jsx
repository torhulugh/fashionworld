import { BrowserRouter, Routes, Route } from "react-router";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
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
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
