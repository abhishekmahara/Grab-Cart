import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getData } from "../Contextt/ProductContext";

const ProductPage = () => {
  const { products, loading } = getData();
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    if (!loading && products.length > 0) {
      const results = products.filter((p) =>
        p.title.toLowerCase().includes(searchQuery)
      );
      setFilteredProducts(results);
    }
  }, [searchQuery, products, loading]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 min-h-[400px]">
      <h2 className="text-2xl text-white mb-4">
        Search Results for “{searchQuery}”
      </h2>
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid  grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-3  shadow-2xl ">
              <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-contain rounded"/>
              <h3 className="mt-2 text-lg font-medium">{product.title}</h3>
            <p className="text-gray-600">₹{Math.floor(product.price * 50).toLocaleString("en-IN")}</p>
            <button className="bg-gradient-to-r from-black to-gray-800 text-white px-3 py-2 rounded-xl cursor-pointer mt-2 ">Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
