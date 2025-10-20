import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-black via-neutral-900 to-gray-900 py-3 shadow-black-500 shadow-xl rounded-b-2xl'>
   <div className='max-w-6xl mx-auto flex justify-between items-center'>
    {/* Logo */}
    <div className=''>
    <Link to={'/'} className="flex items-center h-12 overflow-hidden">
    <img
      src="./src/assets/img/gclogo-removebg-preview.png"
      alt="Grabcart"
      className="h-full w-[130px] object-cover cursor-pointer"
    />
  </Link>
    </div>
   {/* menu */}
   <nav className='flex gap-7 items-center'>
    <ul className='flex gap-7 text-xl font-medium'>
      <NavLink to={'/products'} className={({isActive})=>`${isActive ? " bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 bg-clip-text text-transparent transition-all:" :"text-white"} cursor-pointer`}><li>Products</li></NavLink>
     <NavLink to={'/about'} className={({isActive})=>`${isActive ? "bg-gradient-to-r  from-blue-700 via-blue-400 to-blue-300 bg-clip-text text-transparent transition-all:" :"text-white"} cursor-pointer`}><li>About</li></NavLink> 
      <NavLink to={'/contact'} className={({isActive})=>`${isActive ? "bg-gradient-to-r  from-blue-700 via-blue-400 to-blue-300 bg-clip-text text-transparent transition-all:" :"text-white"} cursor-pointer`}><li>Contact</li></NavLink>
 
    </ul>
    {/* cart */}
   <Link to={'/cart'}><FaShoppingCart className='size-5 text-white' /></Link>
   {/* sign in */}
   <div >
      <SignedOut>
        <SignInButton className=' bg-white  font-semibold rounded-md text-black text-l px-3 py-1 cursor-pointer'/>
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
   </div>
   </nav>
    </div>
    </div> 
  )
}

export default Navbar
