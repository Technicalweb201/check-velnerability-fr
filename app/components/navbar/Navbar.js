'use client'
import React, { useState, useEffect } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 h-[60px] w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-2 sm:px-20 flex flex-row justify-between items-center  z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md shadow-lg' : 'bg-opacity-20'}`}>
      <div>
        <h1 className='text-2xl font-extrabold tracking-wide drop-shadow-lg text-white'>Scan Web</h1>
      </div>
      <div className='flex flex-row justify-center items-center space-x-10'>
        <div className='relative group '>
          <div className=' flex-row w-full justify-center items-center cursor-pointer  sm:flex'>
            <p className='text-white transition-colors duration-200 group-hover:text-gray-200 font-sans text-lg hidden sm:block'>Sacnning types</p>
            <RiArrowDropDownLine size={"25px"} className='text-white transition-transform duration-200 group-hover:rotate-180 ' />
          </div>
          <div className='absolute top-full right-full sm:right-0 mt-2 mr-3 w-40 rounded-lg opacity-0 group-hover:opacity-100 delay-200 ease-out transition-all duration-300 invisible group-hover:visible backdrop-filter backdrop-blur-lg'>
            <ul className='py-2 flex flex-col space-y-2'>
              <li className='px-4 py-2 hover:bg-yellow-400 bg-white bg-opacity-40 transition-all duration-150 ease-in-out rounded-lg cursor-pointer'>Option 1</li>
              <li className='px-4 py-2 hover:bg-yellow-400 bg-white bg-opacity-40 transition-all duration-150 ease-in-out rounded-lg cursor-pointer'>Option 2</li>
              <li className='px-4 py-2 hover:bg-yellow-400 bg-white bg-opacity-40 transition-all duration-150 ease-in-out rounded-lg cursor-pointer'>Option 3</li>
            </ul>
          </div>
        </div>
        <p className= ' hidden lg:flex text-white border px-4 py-2 hover:text-black hover:bg-white transition-all duration-200 ease-in-out rounded-lg cursor-pointer shadow-md hover:shadow-xl transform hover:-translate-y-1'>
          Contact us
        </p>
      </div>
    </div>
  );
};

export default Navbar;
