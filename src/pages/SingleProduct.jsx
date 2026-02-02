import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Contextt/CartContext";

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
      <div className="flex items-center justify-center h-screen">
        <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section className="min-h-screen  text-white px-6 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">

        {/* LEFT – Image */}
        <div>
          <div className="bg-gradient-to-br from-white/90 to-white/80 rounded-3xl p-10 flex justify-center">
            <img
              src={activeImage}
              alt={product.title}
              className="w-96 object-contain transition-all duration-300"
            />
          </div>

          {/* Gallery */}
          <div className="flex gap-4 mt-6">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`w-16 h-16 bg-white rounded-xl p-2 transition 
                ${activeImage === img ? "ring-2 ring-white" : "opacity-60 hover:opacity-100"}`}
              >
                <img src={img} className="object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT – Content */}
        <div className="space-y-10">

          {/* Title */}
          <div>
            <p className="text-sm text-gray-400 uppercase tracking-widest">
              {product.brand}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight mt-2">
              {product.title}
            </h1>
          </div>

          {/* Rating */}
          <div className="text-sm text-gray-400">
            ★ {product.rating} · {product.stock} available
          </div>

          {/* Price */}
          <div>
            <p className="text-3xl font-medium">
              ₹{Math.floor(product.price * 50).toLocaleString("en-IN")}
            </p>
            <p className="text-sm text-gray-300 mt-1">
              Incl. taxes · Free delivery
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed max-w-lg">
            {product.description}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-400">Quantity</span>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
              className="w-20 bg-transparent border-b border-gray-600 text-center focus:outline-none focus:border-white"
            />
          </div>

          {/* CTA */}
          <button
            onClick={() => addToCart(product, quantity)}
            className="w-full bg-white text-black py-4 rounded-full text-lg font-medium hover:scale-[1.02] transition"
          >
            Add to Cart
          </button>

          {/* Info Row */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 text-sm text-gray-400">
            <div>
              <p className="font-medium text-white">Delivery</p>
              <p>3–5 days</p>
            </div>
            <div>
              <p className="font-medium text-white">Returns</p>
              <p>7-day policy</p>
            </div>
            <div>
              <p className="font-medium text-white">Warranty</p>
              <p>1 year</p>
            </div>
          </div>

        </div>
      </div>

      
    </section>
  );
};

export default SingleProduct;
