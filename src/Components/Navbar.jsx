import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../Contextt/CartContext";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { cartItem } = useCart()

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/products?search=${query}`);
      setQuery("");
    }
  };

  return (
    <div className="bg-gradient-to-r from-black via-neutral-900 to-gray-900 py-3 shadow-black-500 shadow-xl rounded-b-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center ">
        {/* Logo */}
        <div>
          <Link to={"/"} className="flex items-center h-12 overflow-hidden">
            <img
              src="./src/assets/img/gclogo-removebg-preview.png"
              alt="Grabcart"
              className="h-full w-[130px] object-cover cursor-pointer"
            />
          </Link>
        </div>


        {/* Menu */}
        <nav className="flex gap-6 items-center">
          <ul>

            {/*  Search Bar */}
            <form onSubmit={handleSearch} className="flex items-center gap-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="px-6 py-1.5 bg-white rounded-l-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-b from-[#0000ff] via-blue-600 to-blue-500  text-white px-3 py-1.5 rounded-r-lg hover:bg-blue-700 transition-all"
              >
                Search
              </button>
            </form>
          </ul>
          <ul className="flex gap-6 text-xl font-medium">

            <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 bg-clip-text text-transparent transition-all" : "text-white"} cursor-pointer`}><li>Contact</li></NavLink>
          </ul>


          {/* Cart */}
          <Link to="/cart" className="relative flex items-center">
            <FaShoppingCart className="size-6 text-white" />
            {cartItem.length > 0 && (
              <span className="absolute -top-2 left-3 bg-white text-black text-[10px] font-bold rounded-full px-1.5 py-0.5 shadow">
                {cartItem.length}
              </span>
            )}
          </Link>



          {/* Sign in */}
          <div>
            <SignedOut>
              <SignInButton className="bg-white font-semibold rounded-md text-black text-l px-3 py-1 cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
