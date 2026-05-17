import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomePage from "@/pages/home/HomePage";
import ContactPage from "@/pages/contact/ContactPage";
import AboutPage from "@/pages/about/AboutPage";
import ProductsPage from "@/features/products/ProductsPage";
import SingleProductPage from "@/features/products/SingleProductPage";
import CartPage from "@/features/cart/CartPage";
import OrderSuccessPage from "@/features/checkout/OrderSuccessPage";
import BrandStory from "@/components/common/BrandStory";
import ScrollToTop from "@/components/common/ScrollToTop";
import { fetchProducts } from "@/features/products/productsSlice";
import SizeGuidePage from "@/features/size/SizeGuidePage";
import TermsOfService from "@/features/terms/TermsOfService";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/brand-story" element={<BrandStory />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/size-guide" element={<SizeGuidePage />} />
        <Route path="/terms" element={<TermsOfService />} />  
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
