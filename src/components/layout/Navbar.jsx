import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import React, { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "@/assets/img/logo.png";

import SearchBar from "./SearchBar";
import SaleBanner from "../home/SaleBanner";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const cartItem = useSelector(
    (state) => state.cart.cartItem
  );

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
        <nav>
          <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6">
            {/* LOGO */}
            <Link to="/" className="shrink-0">
          <img src={logo} alt="Grabcart" className="h-16 sm:h-25" />
        </Link>

            {/* RIGHT SECTION */}
            <div className="flex min-w-0 flex-1 items-center justify-end gap-3 sm:gap-6">
              {/* SEARCH BAR */}
              {showSearch && (
                <div className="w-full max-w-sm">
                  <SearchBar />
                </div>
              )}

              {/* SEARCH ICON */}
              <button
                type="button"
                aria-label="Toggle Search"
                onClick={() =>
                  setShowSearch(!showSearch)
                }
                className="text-2xl text-black hover:text-blue-700"
              >
                <IoIosSearch />
              </button>

              {/* CART */}
              <Link
                to="/cart"
                className="relative"
              >
                <IoBagOutline className="text-2xl text-black hover:text-blue-700" />

                {cartItem.length > 0 && (
                  <span className="absolute -right-2 -top-2 rounded-full bg-black px-1.5 py-0.5 text-[10px] text-white">
                    {cartItem.length}
                  </span>
                )}
              </Link>

              {/* MENU + SIDEBAR */}
            <div
  className="group relative shrink-0"
  onMouseEnter={() => setIsSidebarOpen(true)}
  onMouseLeave={() => setIsSidebarOpen(false)}
>
  <button
    type="button"
    aria-label="Open menu"
    className="flex h-10 w-10 items-center justify-center text-2xl text-blue-600 hover:text-blue-800"
  >
    <HiOutlineMenu />
  </button>

  {/* SIDEBAR */}
  <div
    className={`fixed right-0 top-0 z-50 h-full w-[min(320px,100vw)] max-w-full bg-white shadow-2xl transition-all duration-300 ${
      isSidebarOpen
        ? "translate-x-0 opacity-100"
        : "translate-x-full opacity-0"
    }`}
  >
    <div className="flex h-full flex-col p-6">
      {/* TOP */}
      <div className="mb-8 flex justify-end">
        <HiOutlineMenu className="text-2xl text-blue-600" />
      </div>

      {/* LINKS */}
      <Link
        to="/contact"
        onClick={() => setIsSidebarOpen(false)}
        className="mb-6 text-lg font-medium uppercase hover:text-blue-700"
      >
        Contact
      </Link>

      <Link
        to="/about"
        onClick={() => setIsSidebarOpen(false)}
        className="mb-6 text-lg font-medium uppercase hover:text-blue-700"
      >
        About Us
      </Link>

      {/* AUTH */}
      <div className="mt-2 flex gap-3">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-blue-600 px-4 py-2 text-sm text-white">
              Sign Up
            </button>
          </SignInButton>

          <SignInButton mode="modal">
            <button className="border px-4 py-2 text-sm hover:bg-black hover:text-white">
              Login
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </nav>
      </header>

      {/* SALE BANNER */}
      <SaleBanner showBanner={showBanner} />
    </>
  );
};

export default Navbar;
