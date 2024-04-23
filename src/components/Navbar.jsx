import React from 'react';
import logo from '../assets/logo.svg';
import { RxHamburgerMenu } from 'react-icons/rx';

function Navbar() {
  return (
    <div className=' border fixed top-0 left-0 right-0 bg-white'>
      <div className='flex justify-between items-center py-6 mx-48 '>
        <div className=''>
          <img src={logo} className='h-4' alt='' />
        </div>
        <div className='flex items-center space-x-10 text-sm text-neutral-500 '>
          <a href='#' className='hover:text-blue-500'>Signup</a>
          <a href='#' className='hover:text-blue-500'>About</a>
          <a href='#' className='hover:text-blue-500'>Products</a>
          <a href='#' className='hover:text-blue-500'>Pricing</a>
          <a href='#' className='hover:text-blue-500'>Support</a>
          <RxHamburgerMenu className='text-2xl font-semibold text-black' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
