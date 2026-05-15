
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const OrderSuccess = () => {
  const cartItem = useSelector(
    (state) => state.cart.cartItem,
  );

  const navigate = useNavigate();

  const itemCount = cartItem.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  const total = cartItem
    .reduce(
      (sum, item) =>
        sum +
        Math.floor(item.price * 50) *
          item.quantity,
      0,
    )
    .toLocaleString("en-IN");

  const orderId = `GC-${Math.floor(
    100000 + Math.random() * 900000,
  )}`;

  const currentDate = new Date().toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    },
  );

  if (cartItem.length === 0) {
    return (
      <section className="min-h-screen bg-black px-6 py-20 text-white lg:px-20">
        <div className="mx-auto max-w-3xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-xl">
          <div className="mb-6 text-[80px] font-black text-white/10">
            GC
          </div>

          <h1 className="mb-4 text-4xl font-black uppercase tracking-tight">
            Cart Empty
          </h1>

          <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-white/60">
            Your cart is currently empty.
            Explore products and start
            shopping with GrabCart.
          </p>

          <Button
            variant="grabcart"
            onClick={() =>
              navigate("/products")
            }
            className="h-12 px-8 uppercase tracking-wide"
          >
            Shop Products
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white px-4 py-8 text-white sm:px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden border border-white/10 bg-black">
          {/* TOP ACCENT */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* HUGE WATERMARK */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <h1 className="absolute right-[-140px] top-[-30px] select-none text-[240px] font-black uppercase leading-none tracking-tight text-white/[0.03] lg:text-[320px]">
              PAID
            </h1>
          </div>

          {/* HEADER */}
          <div className="relative border-b border-white/10 px-6 py-8 lg:px-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              {/* LEFT */}
              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/40">
                  GrabCart Store
                </p>

                <h1 className="text-5xl font-black uppercase leading-none tracking-tight sm:text-7xl">
                  ORDER
                  <br />
                  SUCCESS
                </h1>
              </div>

              {/* RIGHT */}
              <div className="text-left lg:text-right">
                <div className="mb-6 flex items-center gap-3 lg:justify-end">
                 

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                      Payment Status
                    </p>

                    <h2 className="text-2xl font-bold uppercase">
                      Paid
                    </h2>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-white/70">
                  <p>{currentDate}</p>
                  <p>{orderId}</p>
                </div>
              </div>
            </div>
          </div>

          

          {/* MAIN CONTENT */}
          <div className="relative grid gap-10 px-6 py-10 lg:grid-cols-[1.5fr_0.7fr] lg:px-10">
            {/* LEFT SIDE */}
            <div>
              {/* CUSTOMER INFO */}
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                    Customer
                  </p>

                  <h3 className="mt-2 text-xl font-semibold uppercase">
                    GrabCart Buyer
                  </h3>
                </div>

                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                    Items
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    {itemCount}
                  </h3>
                </div>
              </div>

              {/* SHIPPING + PAYMENT */}
              <div className="mb-10 grid gap-5 md:grid-cols-2">
                <div className="border border-white/10 bg-white/[0.02] p-5">
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/40">
                    Shipping Address
                  </p>

                  <div className="space-y-1 text-sm text-white/70">
                    <p>GrabCart Customer</p>
                    <p>India</p>
                    <p>Express Delivery</p>
                  </div>
                </div>

                <div className="border border-white/10 bg-white/[0.02] p-5">
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/40">
                    Payment Method
                  </p>

                  <div className="space-y-1 text-sm text-white/70">
                    <p>UPI / Credit Card</p>
                    <p>Transaction Successful</p>
                    <p>Secure Payment</p>
                  </div>
                </div>
              </div>

              {/* TABLE HEADER */}
              <div className="mb-4 hidden grid-cols-[2fr_0.5fr_1fr] border-b border-white/10 pb-3 text-xs uppercase tracking-[0.2em] text-white/40 sm:grid">
                <p>Product</p>
                <p>Qty</p>
                <p className="text-right">
                  Price
                </p>
              </div>

              {/* PRODUCTS */}
              <div className="space-y-6">
                {cartItem.map((item) => (
                  <div
                    key={item.id}
                    className="grid gap-4 border-b border-white/10 pb-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.02] sm:grid-cols-[2fr_0.5fr_1fr]"
                  >
                    {/* PRODUCT */}
                    <div className="flex gap-4">
                      <div className="flex h-24 w-24 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03] p-3">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="h-full object-contain"
                        />
                      </div>

                      <div>
                        <h3 className="text-lg font-medium uppercase leading-snug">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm text-white/50">
                          Premium GrabCart
                          Product
                        </p>
                      </div>
                    </div>

                    {/* QUANTITY */}
                    <div className="flex items-center text-sm text-white/70">
                      {item.quantity}
                    </div>

                    {/* PRICE */}
                    <div className="flex items-center justify-start text-lg font-semibold sm:justify-end">
                      Rs.{" "}
                      {Math.floor(
                        item.price * 50,
                      ).toLocaleString(
                        "en-IN",
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <aside className="h-fit border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 shadow-[0_0_60px_rgba(255,255,255,0.03)]">
              <div className="mb-8">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
                  Summary
                </p>

                <h2 className="text-3xl font-black uppercase">
                  Invoice
                </h2>
              </div>

              {/* SUMMARY */}
              <div className="space-y-4 border-b border-white/10 pb-6 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">
                    Products
                  </span>

                  <span>{itemCount}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/60">
                    Shipping
                  </span>

                  <span>Free</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/60">
                    GST
                  </span>

                  <span>Included</span>
                </div>
              </div>

              {/* TOTAL */}
              <div className="flex items-center justify-between py-6">
                <span className="text-lg font-medium uppercase">
                  Total
                </span>

                <span className="text-3xl font-black">
                  Rs. {total}
                </span>
              </div>

              {/* DELIVERY */}
              <div className="border-t border-white/10 pt-6">
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/40">
                  Estimated Delivery
                </p>

                <h3 className="text-lg font-semibold uppercase">
                  3 - 5 Business Days
                </h3>

                <p className="mt-2 text-sm text-white/50">
                  Your products are being
                  prepared for dispatch.
                </p>
              </div>

              {/* BUTTON */}
              <Button
                variant="grabcart"
                onClick={() =>
                  navigate("/products")
                }
                className="mt-8 h-12 w-full uppercase tracking-wide"
              >
                Continue Shopping
              </Button>

              {/* FOOTER */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-xs leading-relaxed text-white/40">
                  Thank you for shopping
                  with GrabCart. Your order
                  has been successfully
                  placed and will be
                  processed shortly.
                </p>
              </div>
            </aside>
          </div>

          {/* BOTTOM CTA */}
          <div className="relative border-t border-white/10 px-6 py-10 lg:px-10">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Continue Exploring
                </p>

                <h2 className="mt-2 text-3xl font-black uppercase">
                  Discover More Products
                </h2>
              </div>

              <div className="flex gap-4">
                

                <Button
                  variant="grabcart"
                  onClick={() =>
                    navigate("/products")
                  }
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;