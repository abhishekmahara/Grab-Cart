import React from "react";
import { Truck, Lock, RotateCcw, Clock } from "lucide-react";

const features = [
  { icon: Truck, text: "Free Shipping", subtext: "On orders over $100" },
  { icon: Lock, text: "Secure Payment", subtext: "100% protected payments" },
  { icon: RotateCcw, text: "Easy Returns", subtext: "10-day return policy" },
  { icon: Clock, text: "24/7 Support", subtext: "Dedicated customer service" },
];

const Features = () => {
  return (
    <section className="bg-black border-t border-neutral-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-5 group transition"
              >
                <feature.icon
                  className="h-11 w-11 text-white opacity-80 group-hover:opacity-100 transition"
                  strokeWidth={1.2}
                  aria-hidden="true"
                />

                <div>
                  <p className="text-white uppercase text-lg tracking-wide">
                    {feature.text}
                  </p>

                  <p className="text-neutral-400 text-sm mt-1">
                    {feature.subtext}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Features;