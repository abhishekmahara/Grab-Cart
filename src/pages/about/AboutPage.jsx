import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
  ArrowUpRight,
  BadgeCheck,
  Globe2,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";

import lifestyleImg from "@/assets/img/Lifestyle.jpg";
import clothingImg from "@/assets/img/Clothing.jpg";
import electronicsImg from "@/assets/img/Electronics.png";

const stats = [
  { value: "24/7", label: "Support ready" },
  { value: "7-Day", label: "Easy returns" },
  { value: "100%", label: "Secure checkout" },
  { value: "Fast", label: "Delivery mindset" },
];

const values = [
  {
    icon: Zap,
    title: "Built For Speed",
    text: "A clean shopping flow that helps customers move from discovery to checkout without friction.",
  },
  {
    icon: BadgeCheck,
    title: "Quality First",
    text: "Products are presented with a premium, trusted feel across fashion, lifestyle, electronics, beauty, and sports.",
  },
  {
    icon: PackageCheck,
    title: "Everyday Utility",
    text: "GrabCart keeps the store practical: useful categories, simple navigation, and products for real daily needs.",
  },
];

const promises = [
  { icon: Truck, text: "Fast shipping experience" },
  { icon: ShieldCheck, text: "Protected payments" },
  { icon: Sparkles, text: "Fresh collections" },
  { icon: Globe2, text: "One store, many lifestyles" },
];

const AboutPage = () => {
  return (
    <main className="overflow-hidden bg-white text-black">
      {/* HERO */}
      <section className="relative border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 md:px-8 lg:px-10 lg:py-20">
          <div className="max-w-5xl">
            <div className="mb-5 pl-2">
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-black">
                About GrabCart
              </p>
            </div>

            <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Modern Shopping.
              <br />
              Built For
              <br />
              Everyday Life.
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8 lg:text-lg">
              GrabCart combines premium design, fast discovery, and practical
              shopping into one modern ecommerce experience. Fashion,
              electronics, lifestyle, beauty, and more — all in one place.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 px-8 text-xs font-semibold uppercase tracking-[0.22em]"
                variant="grabcart"
              >
                <Link to="/products">
                  Explore Products
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>

              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center border border-black/10 bg-white px-7 text-xs font-bold uppercase tracking-[0.22em] text-black transition hover:border-black hover:bg-black hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-2 border border-black/10 sm:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="border-r border-b border-black/10 px-4 py-5 last:border-r-0 sm:border-b-0 sm:px-6"
              >
                <p className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
                  {item.value}
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/45">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDENTITY */}
      <section className="bg-blue-600 px-5 py-14 text-white sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-100">
              The identity
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
              Convenience with a competitive edge.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-8 text-blue-50/90 sm:text-base">
            The GrabCart idea is simple: bring trusted products, strong prices,
            and a premium browsing experience into one fast-moving store.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <img
              src={clothingImg}
              alt="GrabCart clothing"
              className="h-44 w-full object-cover sm:h-60 lg:h-72"
            />

            <img
              src={electronicsImg}
              alt="GrabCart electronics"
              className="mt-6 h-44 w-full bg-neutral-100 object-cover sm:mt-10 sm:h-60 lg:h-72"
            />

            <img
              src={lifestyleImg}
              alt="GrabCart lifestyle"
              className="col-span-2 h-44 w-full object-cover sm:h-60 lg:h-72"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-600">
              Our mission
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              Make online shopping feel powerful, simple, and worth coming back
              to.
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-neutral-600 sm:text-base">
              GrabCart connects the energy of premium retail with the needs of
              everyday shopping. We focus on clear product discovery, useful
              categories, secure checkout, easy returns, and a store experience
              that feels modern from the first click to the final cart.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-neutral-200 bg-neutral-50 px-5 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-600">
                What drives us
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl">
                The GrabCart code
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-neutral-500">
              Bold visuals matter, but the store has to work hard behind the
              style.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="border border-neutral-200 bg-white p-7"
              >
                <value.icon
                  className="h-10 w-10 text-blue-600"
                  strokeWidth={1.4}
                />

                <h3 className="mt-8 text-xl font-black uppercase tracking-tight">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="bg-black px-5 py-16 text-white sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/45">
              Customer promise
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              Premium feel. Practical shopping. GrabCart trust.
            </h2>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {promises.map((promise) => (
              <div
                key={promise.text}
                className="flex min-h-28 items-center gap-4 border border-white/15 p-5"
              >
                <promise.icon
                  className="h-8 w-8 text-white"
                  strokeWidth={1.4}
                />

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">
                  {promise.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 text-center sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-blue-600">
            Ready to grab your next find?
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
            Explore the store built for everyday momentum.
          </h2>

          <Link
            to="/products"
            className="mt-10 inline-flex h-12 items-center gap-3 bg-black px-8 text-xs font-bold uppercase tracking-[0.25em] text-white transition hover:bg-blue-600"
          >
            View Products
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
