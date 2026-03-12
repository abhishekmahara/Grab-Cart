import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import logo from "../assets/img/gclogo-removebg-preview.png";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-800 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Info */}
        <div>
          <Link to="/" className="flex items-center h-12  overflow-hidden">
            <img src={logo} alt="Grabcart" className="h-full w-[120px] object-cover" />
          </Link>

          <p className="mt-6 text-sm tracking-wide">
            Portfolio:{" "}
            <a
              href="https://abhishekmahara.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition"
            >
              abhishekmahara.in
            </a>
          </p>

          <p className="text-sm mt-1">Email: abhishekmahara9877@gmail.com</p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-white font-semibold mb-6">
            Customer Service
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "text-neutral-400"} hover:text-white transition`
                }
              >
                Contact
              </NavLink>
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Shipping & Returns
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Size Guide
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-white font-semibold mb-6">
            Follow
          </h3>

          <div className="flex gap-6 text-xl">
            <a
              href="https://www.linkedin.com/in/abhishekmahara"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/abhishekmahara_"
              className="hover:text-white transition"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://github.com/abhishekmahara"
              className="hover:text-white transition"
            >
              <IoLogoGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-14 border-t border-neutral-800 pt-6 text-center text-sm text-neutral-500 tracking-wide">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white">Grabcart</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
