import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import Logo from '../assets/Logo.png'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'
import logo from './assets/img/gclogo-removebg-preview.png';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-black via-gray-900 to-gray-900 text-gray-200 py-10 rounded-t-2xl shadow-[0_-1px_10px_rgba(0,0,0,0.3)]'>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>
        {/*  info */}
        <div className='mb-6 md:mb-0'>
          <Link to={'/'} className="flex items-center h-12 overflow-hidden">
            <img
              src={logo}
              alt="Grabcart"
              className="h-full w-[130px] object-cover cursor-pointer"
            />
          </Link>

          <p className='mt-2 text-sm'>Pithoragarh,Uttarkhand 262501</p>
          <p className='text-sm'>Email: abhishekmahara9877@gmail.com</p>

        </div>
        {/* customer service link */}
        <div className='mb-6 md:mb-0'>
          <h3 className='text-xl font-semibold'>Customer Service</h3>
          <ul className='mt-2 text-sm space-y-2'>
            <li><NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 bg-clip-text text-transparent transition-all" : "text-white"} cursor-pointer`}><li>Contact</li></NavLink>
            </li>
            <li>Shipping & Returns</li>
            <li>Size Guide</li>
          </ul>
        </div>
        {/* social media links */}
        <div className='mb-6 md:mb-0'>
          <h3 className='text-xl font-semibold'>Follow Us</h3>
          <div className='flex space-x-4 mt-2'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitterSquare />

          </div>
        </div>
        {/* newsletter subscription */}
        <div>
          <h3 className='text-xl font-semibold'>Stay in the Loop</h3>
          <p className='mt-2 text-sm'>Subscribe to get special offers, free giveaways, and more</p>
          <form action="" className='mt-4 flex'>
            <input
              type="email"
              placeholder='Your email address'
              className='w-full p-2 rounded-l-md  text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500'
            />
            <button type='submit' className='bg-blue-600 text-white px-4 rounded-r-md '>Subscribe</button>
          </form>
        </div>
      </div>
      {/* bottom section */}
      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
        <p>&copy; {new Date().getFullYear()} <span className='text-blue-600'>Grabcart</span>. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer