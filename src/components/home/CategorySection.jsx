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
    name: "Lifestyle",
    image: lifestyleImg,
  },
  {
    name: "Clothing",
    image: clothingImg,
  },
  {
    name: "Electronics",
    image: electronicsImg,
  },
  {
    name: "Beauty",
    image: beautyImg,
  },
  {
    name: "Sports",
    image: sportsImg,
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white text-black">
      {/* HEADER */}
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 py-10 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.38em] text-blue-600 sm:text-xs">
            GrabCart Collection
          </p>

          <h1 className="max-w-3xl text-4xl font-black uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl">
            Shop by category.
          </h1>
        </div>

        <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.25em] text-black/50">
          <span>Explore faster</span>
          <div className="h-[1px] w-16 bg-black/20"></div>
        </div>
      </div>

      {/* CATEGORY GRID */}
      <div className="mx-auto grid max-w-[1800px] grid-cols-2 gap-2 px-3 pb-3 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() =>
              navigate(`/products?category=${cat.name.toLowerCase()}`)
            }
            className="group text-left"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden bg-neutral-100">
              <img
                src={cat.image}
                alt={cat.name}
                className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[420px]"
              />

             
             
            </div>

            {/* TEXT */}
            <div className="flex items-center justify-between py-4">
              <h2 className="text-lg font-semibold uppercase tracking-tight text-black sm:text-2xl">
                {cat.name}
              </h2>

             
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;