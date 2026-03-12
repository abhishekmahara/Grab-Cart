import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import React, { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Contextt/CartContext";
import logo from "../assets/img/logo.png";
import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();
  const { cartItem } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${query}`);
      setQuery("");
      setShowSearch(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Grabcart" className="h-25" />
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-8">

            {/* Search Icon */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-2xl  text-black hover:text-blue-700"
            >
             <IoIosSearch />
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <IoBagOutline className="text-xl  text-black hover:text-blue-700" />

              {cartItem.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] px-1.5 rounded-full">
                  {cartItem.length}
                </span>
              )}
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="text-xl text-blue-600"
            >
              ☰
            </button>

          </div>
        </div>
      </nav>

      {/* SEARCH BAR */}
      {showSearch && (
        <div className="px-6 py-3 bg-white">
          <form onSubmit={handleSearch} className="max-w-xl mx-auto">
            <div className="flex items-center bg-gray-100 px-4 h-10">
              <FaSearch className="text-gray-500 mr-2" />

              <input
                type="text"
                placeholder="Search products"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm"
                autoFocus
              />
            </div>
          </form>
        </div>
      )}

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* RIGHT SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">

          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-xl mb-6"
          >
            ✕
          </button>

          {/* Contact */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium mb-6"
          >
            Contact
          </Link>

          {/* About Us */}
           <Link
            to="/brand-story"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-medium mb-6"
          >
            About Us
          </Link>

          {/* Auth Section */}
          <div className="flex gap-3">

            <SignedOut>
              <SignInButton className="bg-black text-white px-4 py-2 rounded-full text-sm">
                Sign Up
              </SignInButton>

              <SignInButton className="border px-4 py-2 rounded-full text-sm">
                Login
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>

          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;