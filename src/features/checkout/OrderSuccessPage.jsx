import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const OrderSuccess = () => {
  const cartItem = useSelector((state) => state.cart.cartItem);
  const navigate = useNavigate();

  const itemCount = cartItem.reduce((sum, item) => sum + item.quantity, 0);
  const total = cartItem
    .reduce((sum, item) => sum + Math.floor(item.price * 50) * item.quantity, 0)
    .toLocaleString("en-IN");

  if (cartItem.length === 0) {
    return (
      <section className="min-h-screen bg-white px-6 py-20 text-black lg:px-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center border border-gray-200 px-6 py-16 text-center">
          <h1 className="mb-4 text-3xl font-semibold uppercase tracking-tight">
            Add item first
          </h1>
          <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-500">
            Your cart is empty. Add products to your cart before placing an
            order.
          </p>
          <Button
            variant="grabcart"
            onClick={() => navigate("/products")}
            className="px-8 py-5 text-sm font-medium"
          >
            Shop Products
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white px-6 py-8 text-black lg:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 border-b border-gray-200 pb-10 text-center">
          <IoCheckmarkCircleOutline className="mx-auto mb-5 text-7xl text-blue-600" />
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            GrabCart Checkout
          </p>
          <h1 className="text-4xl font-semibold uppercase tracking-tight">
            Order Successful
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500">
            Thank you for shopping with GrabCart. Your order has been placed and
            will be prepared for delivery soon.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-xl font-semibold uppercase">
              Order Items
            </h2>

            <div className="space-y-6">
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-5 border-b border-gray-200 pb-6"
                >
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center bg-gray-100 p-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                    <p className="mt-3 text-sm font-semibold">
                      Rs.{" "}
                      {Math.floor(item.price * 50).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit border border-gray-200 p-8">
            <h2 className="mb-6 text-xl font-semibold">Order Summary</h2>

            <div className="mb-3 flex justify-between text-sm">
              <span>Items</span>
              <span>{itemCount}</span>
            </div>

            <div className="mb-3 flex justify-between text-sm">
              <span>Shipping</span>
              <span className="text-slate-600">Free</span>
            </div>

            <hr className="my-4" />

            <div className="mb-8 flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>Rs. {total}</span>
            </div>

            <Button
              variant="grabcart"
              onClick={() => navigate("/products")}
              className="w-full py-5"
            >
              Continue Shopping
            </Button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
