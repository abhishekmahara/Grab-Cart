import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getData } from "../Contextt/ProductContext";
import { useCart } from "../Contextt/CartContext";

const groupMapping = {
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

const ProductPage = () => {
  const { products, loading } = getData();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortBy, setSortBy] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  const categoryQuery = searchParams.get("category")?.toLowerCase() || "";

  useEffect(() => {
    if (!loading && products.length > 0) {
      let results = [...products];

      // Search
      if (searchQuery) {
        results = results.filter((p) =>
          p.title.toLowerCase().includes(searchQuery),
        );
      }

      // Category
      if (categoryQuery && groupMapping[categoryQuery]) {
        results = results.filter((p) =>
          groupMapping[categoryQuery].includes(p.category.toLowerCase()),
        );
      }

      // Price
      results = results.filter(
        (p) =>
          Math.floor(p.price * 50) >= priceRange[0] &&
          Math.floor(p.price * 50) <= priceRange[1],
      );

      // Rating
      if (minRating > 0) {
        results = results.filter((p) => p.rating >= minRating);
      }

      // Stock
      if (inStockOnly) {
        results = results.filter((p) => p.stock > 0);
      }

      // Sorting
      if (sortBy === "low-high") {
        results.sort((a, b) => a.price - b.price);
      }
      if (sortBy === "high-low") {
        results.sort((a, b) => b.price - a.price);
      }
      if (sortBy === "rating") {
        results.sort((a, b) => b.rating - a.rating);
      }

      setFilteredProducts(results);
    }
  }, [
    products,
    loading,
    searchQuery,
    categoryQuery,
    priceRange,
    sortBy,
    minRating,
    inStockOnly,
  ]);

  if (loading)
    return <p className="text-center mt-10 text-white">Loading...</p>;

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl mb-6">
        {categoryQuery
          ? `Category: ${categoryQuery.replace("-", " ")}`
          : `Search results for "${searchQuery}"`}
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* FILTER SECTION */}
        <aside
          className="
              w-full lg:w-1/4
              bg-gradient-to-b from-gray-950 to-gray-900
              rounded-xl lg:rounded-2xl
              border border-gray-800
              shadow-xl
              p-4 sm:p-5 lg:p-6
              lg:sticky lg:top-24
              lg:min-h-[calc(100vh-120px)]
              md:max-h-[520px] md:overflow-y-auto
            "
        >
          <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">
            Filters
          </h3>

          <div className="border-b border-gray-800 mb-4 lg:mb-6" />

          {/* Sort */}
          <div className="mb-4 lg:mb-6">
            <label className="block text-xs sm:text-sm text-gray-400 mb-1.5">
              Sort by
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
            >
              <option value="">Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="border-b border-gray-800 mb-4 lg:mb-6" />

          {/* Price */}
          <div className="mb-4 lg:mb-6">
            <p className="text-xs sm:text-sm text-gray-400 mb-2">Price Range</p>
            <div className="flex gap-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                className="w-1/2 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
              />
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-1/2 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
              />
            </div>
          </div>

          <div className="border-b border-gray-800 mb-4 lg:mb-6" />

          {/* Rating */}
          <div className="mb-4 lg:mb-6">
            <p className="text-xs sm:text-sm text-gray-400 mb-2">
              Customer Rating
            </p>
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white"
            >
              <option value={0}>All</option>
              <option value={3}>3 ★ & above</option>
              <option value={4}>4 ★ & above</option>
            </select>
          </div>

          <div className="border-b border-gray-800 mb-4 lg:mb-6" />

          {/* Stock */}
          <div className="mb-6 flex items-center gap-3">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={() => setInStockOnly(!inStockOnly)}
              className="accent-blue-600 scale-110"
            />
            <span className="text-sm text-gray-300">In stock only</span>
          </div>

          {/* Clear */}
          <button
            onClick={() => {
              setPriceRange([0, 100000]);
              setSortBy("");
              setMinRating(0);
              setInStockOnly(false);
            }}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium"
          >
            Clear Filters
          </button>
        </aside>

        {/*  PRODUCT GRID  */}
        <section className="lg:w-3/4 w-full">
          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white text-black rounded-xl p-3 shadow hover:scale-105 transition cursor-pointer"
                  onClick={() => navigate(`/products/${product.id}`)}
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-40 object-contain"
                  />
                  <h3 className="mt-2 font-medium truncate">{product.title}</h3>
                  <p className="text-gray-700">
                    ₹{Math.floor(product.price * 50).toLocaleString("en-IN")}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="mt-2 w-full bg-black text-white py-2 rounded-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
