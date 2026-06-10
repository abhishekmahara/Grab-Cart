import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
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
import PageLoader from "@/components/common/PageLoader";
import { fetchProducts } from "@/features/products/productsSlice";
import SizeGuidePage from "@/features/size/SizeGuidePage";
import TermsOfService from "@/features/terms/TermsOfService";

const AppContent = () => {
  const location = useLocation();
  const [pageLoading, setPageLoading] = useState(true);
  const showLoader = pageLoading;

  useEffect(() => {
    setPageLoading(true);
    window.scrollTo(0, 0);

    const loaderTimer = window.setTimeout(() => {
      setPageLoading(false);
    }, 650);

    return () => {
      window.clearTimeout(loaderTimer);
    };
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = showLoader ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showLoader]);

  return (
    <>
      {showLoader && <PageLoader />}
      <Navbar />
      <ScrollToTop />
      <div className="pt-[104px]">
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
      </div>
      <Footer />
    </>
  );
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
