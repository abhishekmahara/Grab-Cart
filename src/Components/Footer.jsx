import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa'
import logo from '../assets/img/gclogo-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-gray-900 text-gray-200 py-10 rounded-t-2xl shadow-[0_-1px_10px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between md:space-x-8">
        
        {/* Company Info */}
        <div className="mb-8 md:mb-0">
          <Link to="/" className="flex items-center h-12 overflow-hidden">
            <img
              src={logo}
              alt="Grabcart"
              className="h-full w-[130px] object-cover cursor-pointer"
            />
          </Link>
          <p className="mt-2 text-sm">Pithoragarh, Uttarakhand 262501</p>
          <p className="text-sm">Email: abhishekmahara9877@gmail.com</p>
        </div>

        {/* Customer Service */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-semibold">Customer Service</h3>
          <ul className="mt-2 text-sm space-y-2">
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive
                    ? "bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 bg-clip-text text-transparent transition-all"
                    : "text-white"} cursor-pointer`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-blue-400 transition-all">Shipping & Returns</li>
            <li className="cursor-pointer hover:text-blue-400 transition-all">Size Guide</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-3 text-2xl">
            <a href="#" className="hover:text-blue-500 transition-all"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500 transition-all"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400 transition-all"><FaTwitterSquare /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold">Stay in the Loop</h3>
          <p className="mt-2 text-sm">
            Subscribe to get special offers, free giveaways, and more.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 rounded-l-md bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-blue-500 font-semibold">Grabcart</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
