import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import React, { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../Contextt/CartContext";
import logo from "../assets/img/gclogo-removebg-preview.png";

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
      setMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-black via-neutral-900 to-gray-900 py-3 shadow-xl rounded-b-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center h-12">
          <img
            src={logo}
            alt="Grabcart"
            className="h-full w-[130px] object-cover"
          />
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden lg:flex flex-grow max-w-lg"
        >
          <div className="flex w-full items-center bg-white rounded-3xl shadow-sm border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 transition">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products, brands and more"
              className="flex-1 h-11 px-5 text-sm text-gray-700 rounded-l-full focus:outline-none"
            />
            <button
              type="submit"
              className="h-11 px-5 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 transition"
            >
              <FaSearch className="text-sm" />
            </button>
          </div>
        </form>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* Search Icon (Mobile + Tablet) */}
          <button
            className="lg:hidden text-white text-xl"
            onClick={() => setShowSearch(!showSearch)}
          >
            <FaSearch />
          </button>

          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 bg-clip-text text-transparent"
                  : "text-white"
              } hidden lg:block text-lg font-medium`
            }
          >
            Contact
          </NavLink>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="size-6 text-white" />
            {cartItem.length > 0 && (
              <span className="absolute -top-2 left-3 bg-white text-black text-[10px] font-bold rounded-full px-1.5 py-0.5">
                {cartItem.length}
              </span>
            )}
          </Link>

          {/* Auth (Desktop only) */}
          <div className="hidden lg:block">
            <SignedOut>
              <SignInButton className="h-10 px-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-500   text-m text-white shadow-sm">
                Sign in
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Search Dropdown */}
      {showSearch && (
        <div className="lg:hidden px-7 pb-4 pt-3 bg-gradient-to-r from-black via-neutral-900 to-gray-900">
          <form onSubmit={handleSearch} className="mx-auto max-w-md">
            <div className="flex items-center bg-white rounded-3xl shadow-sm border border-gray-200">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 h-9 px-4 text-xs text-gray-700 rounded-l-2xl focus:outline-none"
                autoFocus
              />
              <button
                type="submit"
                className="h-9 px-4 flex items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 text-white"
              >
                <FaSearch className="text-xs" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-gradient-to-r from-black via-neutral-900 to-gray-900 text-white py-3 gap-3 rounded-b-2xl">
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

          <SignedOut>
            <SignInButton className="bg-gradient-to-r from-blue-600 to-blue-500 font-normal rounded-3xl text-white px-4 py-1" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
