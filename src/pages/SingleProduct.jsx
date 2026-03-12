import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Contextt/CartContext";
import { Button } from "@/Components/ui/button";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
      setActiveImage(res.data.thumbnail);
      window.scrollTo(0, 0);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="w-8 h-8 border-2 border-gray-200 border-t-black rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white text-black px-6 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
        {/* LEFT – IMAGE AREA */}
        <div className="flex gap-6">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`w-16 h-16 border p-1 transition 
                ${activeImage === img ? "border-black" : "border-gray-200"}`}
              >
                <img src={img} className="object-contain w-full h-full" />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-gray-50  p-16 flex justify-center items-center">
            <img
              src={activeImage}
              alt={product.title}
              className="max-h-[420px] object-contain"
            />
          </div>
        </div>

        {/* RIGHT – PRODUCT DETAILS */}
        <div className="space-y-10">
          {/* Title */}
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider">
              {product.brand}
            </p>

            <h1 className="text-4xl font-semibold mt-2 leading-tight uppercase">
              {product.title}
            </h1>
          </div>

          {/* Rating */}
          <div className="text-sm text-gray-500">
            ★ {product.rating} · {product.stock} in stock
          </div>

          {/* Price */}
          <div>
            <p className="text-3xl font-semibold">
              ₹{Math.floor(product.price * 50).toLocaleString("en-IN")}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Free delivery · Taxes included
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed max-w-md">
            {product.description}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-500">Quantity</span>

            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
              className="w-20 border border-gray-300  px-2 py-1 text-center focus:outline-none focus:border-black"
            />
          </div>

          {/* Add to Cart */}
          <Button variant="grabcart"
            onClick={() => addToCart(product, quantity)}
            className="w-full uppercase bg-blue-600 text-white py-6  text-lg font-medium hover:bg-gray-900 transition"
          >
            Add to Cart
          </Button>

          {/* Info Grid */}
          <div className="grid grid-cols-3 gap-10 pt-10 border-t border-gray-200 text-sm text-gray-500">
            <div>
              <p className="font-medium text-black">Delivery</p>
              <p>3–5 business days</p>
            </div>

            <div>
              <p className="font-medium text-black">Returns</p>
              <p>7-day return policy</p>
            </div>

            <div>
              <p className="font-medium text-black">Warranty</p>
              <p>1 year coverage</p>
            </div>
          </div>
        </div>
      </div>
      {/* -------- PRODUCT HIGHLIGHTS -------- */}
      <div className="max-w-7xl mx-auto mt-24 grid md:grid-cols-2 gap-16 border-t pt-16">
        <div>
          <h2 className="text-xl font-semibold mb-5 uppercase">Product Highlights</h2>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>- Premium quality materials</li>
            <li>- Lightweight and comfortable design</li>
            <li>- Built for everyday performance</li>
            <li>- Carefully selected by GrabCart</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-5 uppercase">GrabCart Promise</h2>

          <p className="text-sm text-gray-600 leading-relaxed">
            At GrabCart we focus on quality, reliability and value. Every
            product is carefully selected to provide customers with a smooth
            shopping experience backed by secure payments and fast delivery.
          </p>
        </div>
      </div>

      {/* -------- SIMPLE BRAND LINE -------- */}
      <div className="max-w-4xl mx-auto mt-24 text-center">
        <h2 className="text-2xl font-semibold mb-4 uppercase">
          Built for Everyday Convenience
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed">
          Discover reliable products designed for modern lifestyles — combining
          performance, durability and simplicity.
        </p>
      </div>
    </section>
  );
};

export default SingleProduct;
