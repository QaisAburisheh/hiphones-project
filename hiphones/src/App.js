import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Phone from "./components/Phone";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Cards />} />
        <Route exact path="/:details" element={<Phone />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
