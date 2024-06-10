
import logo from "../../assets/logo3.jpeg"
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };


 

  return (
    <div className='w-full bg-white'>
    <div className='bg-white flex justify-between items-center h-24 w-full    text-black'>
      {/* Logo */}
      <img src={logo} alt="logo" className="w-[250px]" />

      {/* Desktop Navigation */}
      <ul className='hidden md:flex md:w-1/2 md:justify-between'>
       
          <Link to="/" className='w-32 flex justify-center items-center hover:bg-green-500 rounded-lg  cursor-pointer duration-300 hover:text-white'>Home</Link>
          <Link to="about" className='w-32 flex justify-center items-center hover:bg-green-500 rounded-xl  cursor-pointer duration-300 hover:text-white'>About</Link>
          <Link to="howitworks" className='w-32 h-10 p-2 flex justify-center items-center hover:bg-green-500 rounded-xl  cursor-pointer duration-300 hover:text-white '>How It Works</Link>
          <Link to="faqs" className='w-32 flex justify-center items-center hover:bg-green-500 rounded-xl  cursor-pointer duration-300 hover:text-white'>Faqs</Link>
          <Link to="contact" className='w-32 flex justify-center items-center hover:bg-green-500 rounded-xl  cursor-pointer duration-300 hover:text-white'>Contact</Link>
    
      </ul>
      <div className='w-1/4 md:flex gap-4 hidden'>
        <Link to="applynow" className="flex items-center justify-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0 w-32 h-12 text-white font-bold">Apply Now</Link>
        <Link className="flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 rounded text-base font-bold mt-4 md:mt-0 w-32 justify-center h-12 text-white">Pay Now</Link>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <img src={logo} alt="logo" />

        {/* Mobile Navigation Items */}
        
          <Link to="/" className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'>Home</Link>
          <Link to="about" className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'>About</Link>
          <Link to="howitworks" className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'>How It Works</Link>
          <Link to="faqs" className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'>Faqs</Link>
          <Link to="contact" className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'>Contact</Link>
          <div className='w-full flex gap-4 md:hidden'>
        <Link to="applynow" className="flex items-center justify-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0 w-32 h-12 text-white font-bold">Apply Now</Link>
        <Link className="flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base font-bold mt-4 md:mt-0 w-32 justify-center h-12 text-white">Pay Now</Link>
      </div>
      
      </ul>
    



    </div>
    </div>
  );
};

export default Navbar;