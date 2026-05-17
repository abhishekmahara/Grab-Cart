import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import electronicsImg from "@/assets/img/Electronics.png";
import lifestyleImg from "@/assets/img/Lifestyle.jpg";
import beautyImg from "@/assets/img/beautysection.jpg";
import clothingImg from "@/assets/img/Clothing.jpg";
import sportsImg from "@/assets/img/sports.jpg";

const categories = [
  {
    name: "lifestyle",
    image: lifestyleImg,
  },
  {
    name: "clothing",
    image: clothingImg,
  },
  {
    name: "electronics",
    image: electronicsImg,
  },
  {
    name: "beauty",
    image: beautyImg,
  },
  {
    name: "sports",
    image: sportsImg,
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <section className="bg-blue-600 text-white">
      {/* HEADER */}
      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-8xl flex-col gap-6 px-5 py-8 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-white/90 sm:text-xs">
              GrabCart Collection
            </p>

            <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl ">
              Shop by category.
            </h1>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.25em] text-white/85">
            <span>Explore faster</span>
            <div className="h-[1px] w-16 bg-white"></div>
          </div>
        </div>
      </div>

      {/* CATEGORY GRID */}
      <div className="grid grid-cols-1 gap-px bg-white sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => handleCategoryClick(cat.name)}
            className="group relative overflow-hidden bg-black text-left"
          >
            <div className="relative h-[420px] overflow-hidden">
              {/* IMAGE */}
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 flex w-full items-center justify-between p-6">
                <h2 className="text-2xl  font-medium uppercase tracking-tight text-white">
                  {cat.name}
                </h2>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;