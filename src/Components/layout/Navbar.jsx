import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/img/logo.png";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cart.cartItem);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${query}`);
      setQuery("");
      setShowSearch(false);
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Grabcart" className="h-16 sm:h-25" />
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-3 sm:gap-6">
          {showSearch && (
            <form
              onSubmit={handleSearch}
              className="flex h-10 min-w-0 flex-1 items-center bg-gray-100 px-3 sm:max-w-sm"
            >
              <FaSearch className="mr-2 shrink-0 text-gray-500" />

              <input
                type="text"
                placeholder="Search products"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="min-w-0 flex-1 bg-transparent text-sm outline-none"
                autoFocus
              />
            </form>
          )}

          <button
            type="button"
            aria-label="Toggle search"
            onClick={() => setShowSearch(!showSearch)}
            className="shrink-0 text-2xl text-black hover:text-blue-700"
          >
            <IoIosSearch />
          </button>

          <Link to="/cart" className="relative shrink-0">
            <IoBagOutline className="text-xl text-black hover:text-blue-700" />

            {cartItem.length > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-black px-1.5 text-[10px] text-white">
                {cartItem.length}
              </span>
            )}
          </Link>

          <div className="group relative shrink-0">
            <button
              type="button"
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center text-2xl text-blue-600 hover:text-blue-800"
            >
              <HiMenuAlt3 />
            </button>

            <div className="invisible fixed right-0 top-0 z-50 h-full w-[320px] translate-x-full bg-white opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-x-0 group-focus-within:opacity-100">
              <div className="flex h-full flex-col p-6">
                <div className="mb-8 flex justify-end">
                  <HiMenuAlt3 className="text-2xl text-blue-600" />
                </div>

                <Link
                  to="/contact"
                  className="mb-6 text-lg font-medium uppercase hover:text-blue-700"
                >
                  Contact
                </Link>

                <Link
                  to="/brand-story"
                  className="mb-6 text-lg font-medium uppercase hover:text-blue-700"
                >
                  About Us
                </Link>

                <div className="mt-2 flex gap-3">
                  <SignedOut>
                    <SignInButton className="bg-blue-600 px-4 py-2 text-sm text-white">
                      Sign Up
                    </SignInButton>

                    <SignInButton className="border px-4 py-2 text-sm hover:bg-black hover:text-white">
                      Login
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
  );
};

export default Navbar;
