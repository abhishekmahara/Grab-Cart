import { useCart } from "../Contextt/CartContext";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const { cartItem, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calculate total amount including quantity
  const getTotal = () => {
    return cartItem
      .reduce((sum, item) => sum + Math.floor(item.price * 50) * item.quantity, 0)
      .toLocaleString("en-IN");
  };

  // If cart is empty
  if (cartItem.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white ">
        <h2 className="text-3xl mb-4 font-semibold tracking-wide">
          Your Cart is Empty 🛒
        </h2>
        <p className="text-gray-300 mb-4">Looks like you haven’t added anything yet.</p>
        <button
          onClick={() => navigate("/products")}
          className="bg-gradient-to-r from-blue-600 to-blue-500 hover:scale-[1.05] px-6 py-2 rounded-lg font-semibold text-white transition-all"
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white py-10 px-4 md:px-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Your Cart</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="md:col-span-2 space-y-6">
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-gray-100 text-black rounded-lg shadow-md p-4 transition "
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-contain rounded-md"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.category}</p>
                <p className="text-blue-600 font-bold mt-1">
                  ₹{Math.floor(item.price * 50).toLocaleString("en-IN")}
                </p>
              </div>

              {/* Quantity & Remove */}
              <div className="flex flex-row items-center gap-4">
                <div className="flex items-center gap-3 px-3 py-1 bg-gradient-to-r from-black to-gray-600 text-white rounded-md font-semibold">
                  <button
                    onClick={() => updateQuantity(item.id, "decrease")}
                    className="hover:text-blue-300 transition"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, "increase")}
                    className="hover:text-blue-300 transition"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 bg-gradient-to-r from-red-500 to-red-400 rounded-md text-white hover:scale-105 transition"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary & Delivery Section */}
        <div className="space-y-6">
          {/* Order Summary */}
          <div className="bg-gray-100 text-black rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Order Summary
            </h3>
            <div className="flex justify-between mb-2">
              <span>Items:</span>
              <span>{cartItem.length}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>₹{getTotal()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Delivery:</span>
              <span className="text-green-500">Free</span>
            </div>
            <hr className="border-gray-400 mb-4" />
            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Total:</span>
              <span>₹{getTotal()}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:scale-[1.03] transition-all text-white font-semibold py-2 rounded-lg">
              Proceed to Checkout
            </button>
          </div>

          {/* Delivery Info */}
          <div className="bg-gray-100 text-black rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Delivery Info
            </h3>
            <form className="space-y-3">
              <div>
                <label className="font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="font-medium">Address</label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex flex-row gap-4">
                <div className="flex-1">
                  <label className="font-medium">State</label>
                  <input
                    type="text"
                    placeholder="Enter your state"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex-1">
                  <label className="font-medium">Postcode</label>
                  <input
                    type="text"
                    placeholder="Enter your postcode"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-4">
                <div className="flex-1">
                  <label className="font-medium">Country</label>
                  <input
                    type="text"
                    placeholder="Enter your country"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex-1">
                  <label className="font-medium">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter your number"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-gradient-to-r from-green-600 to-green-400 hover:scale-[1.03] transition-all text-white font-semibold py-2 rounded-lg"
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
