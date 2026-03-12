import { useCart } from "../Contextt/CartContext";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin7Line } from "react-icons/ri";
import { Button } from "@/Components/ui/button";

const CartPage = () => {
  const { cartItem, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const getTotal = () => {
    return cartItem
      .reduce(
        (sum, item) => sum + Math.floor(item.price * 50) * item.quantity,
        0,
      )
      .toLocaleString("en-IN");
  };

  if (cartItem.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black -mt-16">
        <h2 className="text-3xl font-semibold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-6">
          Looks like you haven't added anything yet.
        </p>

        <button
          onClick={() => navigate("/products")}
          className="px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-900 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black px-6 lg:px-20 py-12">
      {/* Header */}
      <h2 className="text-3xl font-semibold mb-10 tracking-tight uppercase">
        Shopping Cart
      </h2>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 mb-10 text-sm">
        <div className="border border-gray-200 p-4">
          <p className="font-medium">Free Shipping</p>
          <p className="text-gray-500">Free delivery on orders above ₹299</p>
        </div>

        <div className="border border-gray-200 p-4">
          <p className="font-medium">Easy Returns</p>
          <p className="text-gray-500">7-day hassle-free return policy</p>
        </div>

        <div className="border border-gray-200 p-4">
          <p className="font-medium">Secure Checkout</p>
          <p className="text-gray-500">100% protected payments</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-16">
        {/* CART ITEMS */}
        <div className="lg:col-span-2 space-y-8">
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 border-b border-gray-200 pb-8"
            >
              {/* Product Image */}
              <div className="bg-gray-100 p-6  flex items-center justify-center w-32 h-32">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="object-contain h-full"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-1">{item.title}</h3>

                <p className="text-sm text-gray-500 mb-2">
                  Category: {item.category}
                </p>

                <p className="text-lg font-semibold mb-4">
                  ₹{Math.floor(item.price * 50).toLocaleString("en-IN")}
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300">
                    <button
                      onClick={() => updateQuantity(item.id, "decrease")}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span className="px-4">{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, "increase")}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-gray-500 hover:text-black flex items-center gap-2"
                  >
                    <RiDeleteBin7Line /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ORDER SUMMARY */}
        <div className="space-y-8">
          <div className="border border-gray-200 p-8">
            <h3 className="text-xl font-semibold mb-6">Order Summary</h3>

            <div className="flex justify-between text-sm mb-3">
              <span>Items</span>
              <span>{cartItem.length}</span>
            </div>

            <div className="flex justify-between text-sm mb-3">
              <span>Subtotal</span>
              <span>₹{getTotal()}</span>
            </div>

            <div className="flex justify-between text-sm mb-4">
              <span>Shipping</span>
              <span className="text-slate-600">Free</span>
            </div>

            <hr className="mb-4" />

            <div className="flex justify-between font-semibold text-lg mb-6">
              <span>Total</span>
              <span>₹{getTotal()}</span>
            </div>

            <Button variant="grabcart" className="w-full py-5">
              Checkout
            </Button>
          </div>

          {/* DELIVERY INFO */}
          <div className="border border-gray-200 p-8">
            <h3 className="text-xl font-semibold mb-6">Delivery Information</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-black"
              />

              <input
                type="text"
                placeholder="Address"
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-black"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="State"
                  className="border border-gray-300 px-3 py-2 focus:outline-none focus:border-black"
                />

                <input
                  type="text"
                  placeholder="Postcode"
                  className="border border-gray-300 px-3 py-2 focus:outline-none focus:border-black"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Country"
                  className="border border-gray-300 px-3 py-2 focus:outline-none focus:border-black"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 px-3 py-2 focus:outline-none focus:border-black"
                />
              </div>

              <button
                type="button"
                className="w-full border border-black py-3 hover:bg-black hover:text-white transition"
              >
                Save Address
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
