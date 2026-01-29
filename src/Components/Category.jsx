import React, { useEffect, useState } from "react";
import { getData } from "../Contextt/ProductContext";
import { useNavigate } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import { GiClothes, GiLipstick } from "react-icons/gi";
import { IoHome, IoLaptopSharp } from "react-icons/io5";

const iconMapping = {
  electronics: <IoLaptopSharp size={35} />,
  lifestyle: <IoHome size={35} />,
  beauty: <GiLipstick size={35} />,
  clothing: <GiClothes size={35} />,
  groceries: <AiFillShopping size={35} />,
};

const Category = () => {
  const { products, loading, error } = getData();
  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && products.length > 0) {
      const values = products.map((item) => item.category);
      const unique = [...new Set(values)];

      const groups = {
        electronics: ["smartphones", "laptops"],
        lifestyle: ["home-decoration", "furniture", "lighting"],
        beauty: ["fragrances", "skincare"],
        clothing: [
          "tops",
          "mens-shirts",
          "womens-dresses",
          "womens-shoes",
          "mens-shoes",
        ],
        groceries: ["groceries"],
      };

      const filtered = Object.keys(groups).filter((group) =>
        groups[group].some((cat) => unique.includes(cat))
      );

      setCategoryData(filtered);
    }
  }, [products, loading]);

  if (error) console.error("Error fetching products:", error);

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <div className="py-6 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-evenly items-center w-full gap-2 px-3 md:gap-6 flex-nowrap">
          {categoryData.map((item, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(item)}
              className="flex flex-col items-center justify-center w-15 h-13 md:w-24 md:h-24 text-white hover:text-blue-600 transition-transform duration-300 hover:scale-110"
            >
              {iconMapping[item]}
              <span className="block w-full mt-2 text-[11px] md:text-base text-center capitalize">
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
