import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturesSection from "@/components/home/FeaturesSection";
import BrandStory from "@/components/common/BrandStory";

const HomePage = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const [firstHeroImageReady, setFirstHeroImageReady] = useState(false);

  const firstHeroImage = useMemo(() => {
    const firstCarouselProduct = products.find(
      (product) =>
        product.category === "smartphones" ||
        product.category === "laptops" ||
        product.category === "electronics",
    );

    return firstCarouselProduct?.images?.[0] || "";
  }, [products]);

  useEffect(() => {
    if (loading) {
      setFirstHeroImageReady(false);
      return;
    }

    if (!firstHeroImage) {
      setFirstHeroImageReady(true);
      return;
    }

    const image = new Image();
    image.onload = () => setFirstHeroImageReady(true);
    image.onerror = () => setFirstHeroImageReady(true);
    image.src = firstHeroImage;
  }, [firstHeroImage, loading]);

  if (loading || !firstHeroImageReady) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-black" />
      </div>
    );
  }

  if (error) {
    return <p className="py-20 text-center text-red-500">{error}</p>;
  }

  return (
    <>
      <HeroCarousel />
      <FeaturesSection />
      <BrandStory />
    </>
  );
};

export default HomePage;
