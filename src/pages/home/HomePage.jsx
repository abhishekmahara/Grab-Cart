import React from "react";
import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturesSection from "@/components/home/FeaturesSection";
import BrandStory from "@/components/common/BrandStory";

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <FeaturesSection />
      <BrandStory />
    </>
  );
};

export default HomePage;
