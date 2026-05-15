import { useClerk, useUser } from "@clerk/clerk-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin7Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import {
  removeFromCart,
  updateQuantity,
} from "@/features/cart/cartSlice";

const CartPage = () => {
  const cartItem = useSelector(
    (state) => state.cart.cartItem,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();

  const getTotal = () => {
    return cartItem
      .reduce(
        (sum, item) =>
          sum +
          Math.floor(item.price * 50) *
            item.quantity,
        0,
      )
      .toLocaleString("en-IN");
  };

  const handleCheckout = () => {
    if (!isSignedIn) {
      toast.info(
        "Please login first to checkout",
      );
      openSignIn();
      return;
    }

    navigate("/order-success");
  };

  // EMPTY CART
  if (cartItem.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center text-black">
        <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
          Your Cart is Empty
        </h2>

        <p className="mb-6 text-sm text-gray-500 sm:text-base">
          Looks like you haven't added
          anything yet.
        </p>

        <Button
          variant="grabcart"
          onClick={() =>
            navigate("/products")
          }
          className="px-6 py-5 text-sm font-medium"
        >
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8 text-black sm:px-6 lg:px-20 lg:py-12">
      
      {/* HEADER */}
      <h2 className="mb-8 text-2xl font-semibold uppercase tracking-tight sm:mb-10 sm:text-3xl">
        Shopping Cart
      </h2>

      {/* FEATURES */}
      <div className="mb-10 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        
        <div className="border border-gray-200 p-4">
          <p className="font-medium">
            Free Shipping
          </p>

          <p className="text-gray-500">
            Free delivery on all orders
          </p>
        </div>

        <div className="border border-gray-200 p-4">
          <p className="font-medium">
            Easy Returns
          </p>

          <p className="text-gray-500">
            7-day hassle-free return
            policy
          </p>
        </div>

        <div className="border border-gray-200 p-4">
          <p className="font-medium">
            Secure Checkout
          </p>

          <p className="text-gray-500">
            100% protected payments
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
        
        {/* CART ITEMS */}
        <div className="space-y-6 lg:col-span-2 lg:space-y-8">
          
          {cartItem.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-5 border-b border-gray-200 pb-6 sm:flex-row sm:gap-6 sm:pb-8"
            >
              
              {/* IMAGE */}
              <div className="flex h-32 w-full items-center justify-center bg-gray-100 p-4 sm:w-32">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full object-contain"
                />
              </div>

              {/* DETAILS */}
              <div className="flex-1">
                
                <h3 className="mb-1 text-base font-medium sm:text-lg">
                  {item.title}
                </h3>

                <p className="mb-2 text-sm text-gray-500">
                  Category: {item.category}
                </p>

                <p className="mb-4 text-lg font-semibold">
                  ₹
                  {Math.floor(
                    item.price * 50,
                  ).toLocaleString(
                    "en-IN",
                  )}
                </p>

                {/* QUANTITY */}
                <div className="flex flex-wrap items-center gap-4">
                  
                  <div className="flex items-center border border-gray-300">
                    
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            productId:
                              item.id,
                            actionType:
                              "decrease",
                          }),
                        )
                      }
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span className="px-4">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            productId:
                              item.id,
                            actionType:
                              "increase",
                          }),
                        )
                      }
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      dispatch(
                        removeFromCart(
                          item.id,
                        ),
                      )
                    }
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-black"
                  >
                    <RiDeleteBin7Line />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* ORDER SUMMARY */}
          <div className="border border-gray-200 p-5 sm:p-8">
            
            <h3 className="mb-6 text-lg font-semibold sm:text-xl">
              Order Summary
            </h3>

            <div className="mb-3 flex justify-between text-sm">
              <span>Items</span>
              <span>
                {cartItem.length}
              </span>
            </div>

            <div className="mb-3 flex justify-between text-sm">
              <span>Subtotal</span>
              <span>
                ₹{getTotal()}
              </span>
            </div>

            <div className="mb-4 flex justify-between text-sm">
              <span>Shipping</span>

              <span className="text-slate-600">
                Free
              </span>
            </div>

            <hr className="mb-4" />

            <div className="mb-6 flex justify-between text-lg font-semibold">
              <span>Total</span>

              <span>
                ₹{getTotal()}
              </span>
            </div>

            <Button
              variant="grabcart"
              onClick={handleCheckout}
              className="w-full py-5"
            >
              Checkout
            </Button>
          </div>

          {/* DELIVERY INFO */}
          <div className="border border-gray-200 p-5 sm:p-8">
            
            <h3 className="mb-6 text-lg font-semibold sm:text-xl">
              Delivery Information
            </h3>

            <form className="space-y-4">
              
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 px-3 py-3 text-sm focus:border-black focus:outline-none"
              />

              <input
                type="text"
                placeholder="Address"
                className="w-full border border-gray-300 px-3 py-3 text-sm focus:border-black focus:outline-none"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                
                <input
                  type="text"
                  placeholder="State"
                  className="border border-gray-300 px-3 py-3 text-sm focus:border-black focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Postcode"
                  className="border border-gray-300 px-3 py-3 text-sm focus:border-black focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                
                <input
                  type="text"
                  placeholder="Country"
                  className="border border-gray-300 px-3 py-3 text-sm focus:border-black focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 px-3 py-3 text-sm focus:border-black focus:outline-none"
                />
              </div>

              <button
                type="button"
                className="w-full border border-black py-3 text-sm transition hover:bg-black hover:text-white"
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