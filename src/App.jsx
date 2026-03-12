import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import { ProductProvider } from "./Contextt/ProductContext";
import { CartProvider } from "./Contextt/CartContext";
import BrandStory from "./Components/BrandStory";
import ScrollToTop from "./Components/ui/ScrollToTop";

const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
             <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/brand-story" element={<BrandStory />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
