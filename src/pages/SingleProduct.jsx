import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../Contextt/CartContext';

const SingleProduct = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  // Fetch single product data
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setSingleProduct(res.data);
    } catch (error) {
      console.log('Error fetching product:', error);
    }
  };

  useEffect(() => {
    getSingleProduct();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {singleProduct ? (
        <div className="min-h-screen text-white flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 px-6 py-12 md:px-12 lg:p-20">
          {/* Product image */}
          <div className="bg-white rounded-2xl shadow-2xl p-4 flex justify-center">
            <img
              src={singleProduct.thumbnail}
              alt={singleProduct.title}
              className="w-60 sm:w-72 md:w-80 lg:w-96 h-auto rounded-xl object-contain"
            />
          </div>

          {/* Product details */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-2/3 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold">{singleProduct.title}</h1>
            <div className="text-sm sm:text-lg text-gray-300 capitalize">
              {singleProduct.category}
            </div>
            <p className="text-lg sm:text-xl font-semibold text-gray-100">
              ₹{Math.floor(singleProduct.price * 50).toLocaleString('en-IN')}
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {singleProduct.description}
            </p>

            {/* Quantity */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <label
                htmlFor="quantity"
                className="text-sm sm:text-base font-medium text-gray-200"
              >
                Quantity:
              </label>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-16 text-center bg-white text-black rounded-md py-1 px-2 border-none focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            {/* Add to Cart Button */}
            <div className="flex justify-center lg:justify-start gap-4 mt-4">
              <button
                className="bg-gradient-to-r from-black to-gray-800 text-white px-5 py-2 rounded-xl mt-2 hover:scale-105 transition-transform duration-200"
                onClick={() => addToCart(singleProduct, quantity)} // ✅ Pass quantity separately
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen bg-gray-950">
          <div className="w-16 h-16 border-4 border-transparent border-t-blue-500 border-l-blue-400 rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
