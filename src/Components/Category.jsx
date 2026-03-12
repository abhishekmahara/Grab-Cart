import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const categories = [
  {
    name: "electronics",
    image: "src/assets/img/Electronics.jpg",
  },
  {
    name: "lifestyle",
    image: "src/assets/img/Lifestyle.jpg",
  },
  {
    name: "beauty",
    image: "src/assets/img/beauty.jpg",
  },
  {
    name: "clothing",
    image: "src/assets/img/Clothing.jpg",
  },
  {
    name: "groceries",
    image: "src/assets/img/Groceries.jpg",
  },
];

const Category = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div className="max-w-full mx-auto ">
      <h1 className="text-white bg-blue-600 uppercase text-3xl font-semibold px-5 py-5">Category </h1>
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

export default Category;
