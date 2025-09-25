import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import About from "./pages/About.jsx"
import Category from "./pages/Category.jsx"
import LaptopDetail from "./pages/LaptopDetail.jsx"
import NotFound from "./pages/NotFound"

import SingleLaptopInfo from "./pages/SingleLaptopInfo.jsx";
import { useState } from "react";


function App() {
  const [product, setProduct] = useState({});
  function handleProductSingle(data) {
    setProduct(data)
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/laptop-detail/category/:categoryName/:id" element={<LaptopDetail handleProductSingle={handleProductSingle} />} />
        <Route path="/laptop-detail/category/:categoryName/:id/product/:productName/:pid" element={<SingleLaptopInfo product={product} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
