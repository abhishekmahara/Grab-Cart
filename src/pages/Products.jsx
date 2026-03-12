import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getData } from "../Contextt/ProductContext";
import { useCart } from "../Contextt/CartContext";
import { Button } from "@/Components/ui/button";

const groupMapping = {
  electronics: ["smartphones", "laptops", "mobile-accessories"],
  lifestyle: ["furniture", "kitchen-accessories"],
  beauty: ["fragrances", "skin-care"],
  clothing: ["mens-shirts", "mens-shoes", "mens-watches"],
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

      if (searchQuery) {
        results = results.filter((p) =>
          p.title.toLowerCase().includes(searchQuery),
        );
      }

      if (categoryQuery && groupMapping[categoryQuery]) {
        results = results.filter((p) =>
          groupMapping[categoryQuery].includes(p.category.toLowerCase()),
        );
      }

      results = results.filter(
        (p) =>
          Math.floor(p.price * 50) >= priceRange[0] &&
          Math.floor(p.price * 50) <= priceRange[1],
      );

      if (minRating > 0) {
        results = results.filter((p) => p.rating >= minRating);
      }

      if (inStockOnly) {
        results = results.filter((p) => p.stock > 0);
      }

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
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <p className="text-gray-500">Loading products...</p>
      </div>
    );

  return (
    <div>
      {/* Header */}
      <div className="bg-blue-600 py-5 px-4 mb-10 lg:px-12">
        <h2 className=" text-white text-3xl font-semibold px-3 tracking-tight uppercase mb-2">
          {categoryQuery ? categoryQuery.replace("-", " ") : `Search results`}
        </h2>
        <p className="text-sm px-3 text-gray-100 ">
          {filteredProducts.length} products
        </p>
      </div>
      <div className="bg-white text-black min-h-screen  px-6 lg:px-16 py-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* FILTER SIDEBAR */}
          <aside className="w-full lg:w-1/4 border-r border-gray-200 pr-8 h-fit lg:sticky lg:top-24">
            <h3 className="text-sm uppercase tracking-widest mb-6 font-medium">
              Filters
            </h3>

            {/* Sort */}
            <div className="mb-6">
              <label className="block text-xs text-gray-500 mb-2">
                Sort by
              </label>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-black"
              >
                <option value="">Default</option>
                <option value="low-high">Price: Low → High</option>
                <option value="high-low">Price: High → Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="text-xs text-gray-500 mb-2">Price Range</p>

              <div className="flex gap-2">
                <input
                  type="number"
                  value={priceRange[0] === 0 ? "" : priceRange[0]}
                  placeholder="Min"
                  onChange={(e) =>
                    setPriceRange([
                      e.target.value === "" ? "" : Number(e.target.value),
                      priceRange[1],
                    ])
                  }
                  className="w-1/2 border border-gray-300 px-3 py-2 text-sm"
                />

                <input
                  type="number"
                  value={priceRange[1] === 100000 ? "" : priceRange[1]}
                  placeholder="Max"
                  onChange={(e) =>
                    setPriceRange([
                      priceRange[0],
                      e.target.value === "" ? "" : Number(e.target.value),
                    ])
                  }
                  className="w-1/2 border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
            </div>

            {/* Rating */}
            <div className="mb-6">
              <p className="text-xs text-gray-500 mb-2">Customer Rating</p>

              <select
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="w-full border border-gray-300  px-3 py-2 text-sm"
              >
                <option value={0}>All</option>
                <option value={3}>3★ & above</option>
                <option value={4}>4★ & above</option>
              </select>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-3 mb-8">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={() => setInStockOnly(!inStockOnly)}
                className="accent-black"
              />

              <span className="text-sm text-gray-600">In stock only</span>
            </div>

            {/* Clear Filters */}
            <Button
              variant="grabcart"
              onClick={() => {
                setPriceRange([0, 100000]);
                setSortBy("");
                setMinRating(0);
                setInStockOnly(false);
              }}
              className="w-full py-6"
            >
              Clear Filters
            </Button>
          </aside>

          {/* PRODUCT GRID */}
          <section className="lg:w-3/4 w-full">
            {filteredProducts.length === 0 ? (
              <p className="text-gray-500">No products found.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group cursor-pointer"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    {/* Image */}
                    <div className="bg-gray-50 p-8 flex items-center justify-center group-hover:bg-gray-100 transition">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-40 object-contain group-hover:scale-105 transition"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 text-sm font-medium truncate">
                      {product.title}
                    </h3>

                    {/* Price */}
                    <p className="text-sm text-gray-600">
                      ₹{Math.floor(product.price * 50).toLocaleString("en-IN")}
                    </p>

                    {/* Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="mt-3 w-full border border-black py-2 text-sm font-medium hover:bg-black hover:text-white transition"
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
    </div>
  );
};

export default ProductPage;
