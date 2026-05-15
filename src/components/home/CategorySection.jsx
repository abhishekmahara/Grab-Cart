import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import electronicsImg from "@/assets/img/Electronics.png";
import lifestyleImg from "@/assets/img/Lifestyle.jpg";
import beautyImg from "@/assets/img/beautysection.png";
import clothingImg from "@/assets/img/Clothing.jpg";
import sportsImg from "@/assets/img/sports.jpg";

const categories = [
 
  { name: "lifestyle", image: lifestyleImg },
   { name: "electronics", image: electronicsImg },
  { name: "clothing", image: clothingImg },
  { name: "beauty", image: beautyImg },
  { name: "sports", image: sportsImg },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div className="max-w-full mx-auto ">
      <div className="bg-blue-600 text-white border-y border-blue-500">
        <div className="flex items-center justify-between px-5 lg:px-8 py-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-blue-100 mb-2 font-medium">
              GrabCart Collection
            </p>

            <h1 className="uppercase text-2xl md:text-3xl font-black tracking-tight leading-none">
              Categories
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-3 text-sm uppercase tracking-widest text-blue-100">
            <span>Explore</span>

            <div className="w-12 h-[1px] bg-blue-200"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(cat.name)}
            className="cursor-pointer group"
          >
            {/* Image */}
            <div className="overflow-hidden relative">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-[300px] md:h-[400px] object-cover 
                group-hover:border-white group-hover:border-2 transition duration-300"
              />

              {/* Overlay text*/}
              <div className="absolute inset-0 flex items-end justify-start p-4">
                <span className="flex items-center gap-2 text-white border-1 border-white px-2  text-lg capitalize">
                  {cat.name}
                  <BsArrowRight />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
