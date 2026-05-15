import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/img/gclogo-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-[85rem]  px-6 py-14 lg:px-10">
        
        {/* TOP */}
        <div className="flex flex-col gap-12 border-b border-white/10 pb-12 lg:flex-row lg:items-start lg:justify-between">
          
          {/* LEFT */}
          <div className="max-w-md">
            <Link
              to="/"
              className="flex h-12 items-center overflow-hidden"
            >
              <img
                src={logo}
                alt="Grabcart"
                className="h-full w-[125px] object-cover"
              />
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-white/50">
              Modern ecommerce experience
              inspired by premium fashion
              and lifestyle brands.
            </p>

            {/* SOCIALS */}
            <div className="mt-7 flex gap-5">
              <a
                href="https://www.linkedin.com/in/abhishekmahara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white/50 transition hover:scale-110 hover:text-white"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/abhishekmahara_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white/50 transition hover:scale-110 hover:text-white"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://github.com/abhishekmahara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white/50 transition hover:scale-110 hover:text-white"
              >
                <IoLogoGithub />
              </a>
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            
          {/* EXPLORE */}
<div>
  <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
    Explore
  </h3>

  <ul className="space-y-3 text-sm">
    <li>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? "text-white"
            : "text-white/60 hover:text-white transition"
        }
      >
        All Products
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive
            ? "text-white"
            : "text-white/60 hover:text-white transition"
        }
      >
        Shopping Cart
      </NavLink>
    </li>

   

    <li>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-white"
            : "text-white/60 hover:text-white transition"
        }
      >
        Help & Support
      </NavLink>
    </li>
  </ul>
</div>

            {/* INFO */}
            <div>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Info
              </h3>

              <ul className="space-y-3 text-sm">
                <li>
                  <NavLink
                    to="/brand-story"
                    className="text-white/60 transition hover:text-white"
                  >
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className="text-white/60 transition hover:text-white"
                  >
                    Contact
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/size-guide"
                    className="text-white/60 transition hover:text-white"
                  >
                    Size Guide
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* DEVELOPER */}
            <div>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Developer
              </h3>

              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://abhishekmahara.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 transition hover:text-white"
                  >
                    Portfolio
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:abhishekmahara9877@gmail.com"
                    className="text-white/60 transition hover:text-white"
                  >
                    Email
                  </a>
                </li>

                <li>
                  <span className="text-white/40">
                    Frontend Developer
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 pt-6 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
          
          <p>
            © {new Date().getFullYear()} GrabCart.
            All rights reserved.
          </p>

          <p className="uppercase tracking-[0.2em]">
            Designed & Developed by
            Abhishek Mahara
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;