import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getData } from "../Contextt/ProductContext";
import { useCart } from "../Contextt/CartContext";

const groupMapping = {
  electronics: ["smartphones", "laptops"],
  "home-decoration": ["home-decoration", "furniture", "lighting"],
  beauty: ["fragrances", "skincare"],
  clothing: ["tops", "mens-shirts", "womens-dresses", "womens-shoes", "mens-shoes"],
  groceries: ["groceries"],
};

const ProductPage = () => {
  const { products, loading } = getData();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  const categoryQuery = searchParams.get("category")?.toLowerCase() || "";

  useEffect(() => {
    if (!loading && products.length > 0) {
      let results = [...products];

      //  Apply search filter
      if (searchQuery) {
        results = results.filter((p) =>
          p.title.toLowerCase().includes(searchQuery)
        );
      }

      //  Apply category filter from URL
      if (categoryQuery && groupMapping[categoryQuery]) {
        const groupCategories = groupMapping[categoryQuery];
        results = results.filter((p) =>
          groupCategories.includes(p.category.toLowerCase())
        );
        setSelectedCategory(categoryQuery);
      }

      // Apply price filter
      results = results.filter(
        (p) =>
          Math.floor(p.price * 50) >= priceRange[0] &&
          Math.floor(p.price * 50) <= priceRange[1]
      );

      setFilteredProducts(results);
    }
  }, [searchQuery, categoryQuery, products, loading, priceRange]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 min-h-[400px] text-white">
      <h2 className="text-2xl mb-6">
        {categoryQuery
          ? `Category: ${categoryQuery.replace("-", " ")}`
          : `Search Results for “${searchQuery}”`}
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/*  Filter Section */}
        <div className="md:w-1/4 sm:h-[250px] w-full h-[350px] bg-gray-900 p-4 rounded-lg shadow-lg !h-[250px] ">
          <h3 className="text-lg font-semibold mb-3">Filters</h3>

          {/* Price Filter */}
          <div className="mb-5">
            <h4 className="text-gray-300 mb-2">Price Range</h4>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                max="100000"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                className="w-1/2 p-2 rounded bg-gray-800 text-white"
              />
              <span>to</span>
              <input
                type="number"
                min="0"
                max="100000"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-1/2 p-2 rounded bg-gray-800 text-white"
              />
            </div>
          </div>

          <button
            onClick={() => setPriceRange([0, 100000])}
            className="mt-3 bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg"
          >
            Clear Filters
          </button>
        </div>

        {/*  Product Grid */}
        <div className="md:w-3/4 w-full">
          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white text-black rounded-lg p-3 shadow-2xl hover:scale-105 transition-all cursor-pointer"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-40 object-contain rounded"
                  />
                  <h3 className="mt-2 text-lg font-medium truncate">
                    {product.title}
                  </h3>
                  <p className="text-gray-700">
                    ₹{Math.floor(product.price * 50).toLocaleString("en-IN")}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); 
                      addToCart(product);
                    }}
                    className="bg-gradient-to-r from-black to-gray-800 text-white px-3 py-2 rounded-xl mt-2 w-full"
                  >
                    Add to Cart
                  </button>

                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
