import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../Contextt/CartContext";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItem } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/products?search=${query}`);
      setQuery("");
    }
  };

  return (
    <nav className="bg-gradient-to-r from-black via-neutral-900 to-gray-900 py-3 shadow-black-500 shadow-xl rounded-b-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-3">
        {/* --- Left: Logo --- */}
        <Link to="/" className="flex items-center h-12">
          <img
            src="./src/assets/img/gclogo-removebg-preview.png"
            alt="Grabcart"
            className="h-full w-[130px] object-cover cursor-pointer"
          />
        </Link>

        {/* --- Center: Search Bar (Always Visible) --- */}
        <form
          onSubmit={handleSearch}
          className="flex items-center flex-grow max-w-md w-full order-3 sm:order-none"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="px-4 py-1.5 bg-white rounded-l-lg text-black w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-white px-3 py-1.5 rounded-r-lg hover:bg-blue-700 transition-all"
          >
            Search
          </button>
        </form>

        {/* --- Right: Links, Cart, Auth --- */}
        <div className="flex items-center gap-5">
          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive
                ? "bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 bg-clip-text text-transparent"
                : "text-white"
              } hidden sm:block text-lg font-medium`
            }
          >
            Contact
          </NavLink>

          {/* Cart (always visible) */}
          <Link to="/cart" className="relative flex items-center">
            <FaShoppingCart className="size-6 text-white" />
            {cartItem.length > 0 && (
              <span className="absolute -top-2 left-3 bg-white text-black text-[10px] font-bold rounded-full px-1.5 py-0.5 shadow">
                {cartItem.length}
              </span>
            )}
          </Link>

          {/* Auth */}
          <div className="hidden sm:block">
            <SignedOut>
              <SignInButton className="bg-white font-semibold rounded-md text-black px-3 py-1 cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="sm:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* --- Mobile Menu (only shows extra links) --- */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center bg-neutral-900 text-white py-3 gap-3 rounded-b-2xl">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive
                ? "bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 bg-clip-text text-transparent"
                : "text-white"
              } text-lg`
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          <SignedOut>
            <SignInButton className="bg-white font-semibold rounded-md text-black px-4 py-1 cursor-pointer" />
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
