import React from "react";

const SaleBanner = ({ showBanner }) => {
  return (
    <div
      className={`absolute left-0 top-16 z-40 w-full overflow-hidden bg-black/95 text-white backdrop-blur-sm transition-all duration-300 ${
        showBanner
          ? "max-h-10 opacity-100"
          : "max-h-0 opacity-0"
      }`}
    >
      <div className="flex h-10 items-center justify-center">
        <p className="px-4 text-center text-[10px] font-medium uppercase tracking-[0.24em] md:text-[11px]">
          Welcome to GrabCart — Free Delivery in 3–5 Days & Easy Returns
        </p>
      </div>
    </div>
  );
};

export default SaleBanner;