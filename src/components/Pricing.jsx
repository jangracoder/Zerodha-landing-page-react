import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import varity from "../assets/index-education.svg"

function Pricing() {
  return (
    <div className='mx-48 mt-20'>
    <div className='flex  w-full  mx-8'>
        <div className='w-[45%] '>
            <h2 className='text-4xl'>Unbeatable Pricing</h2>
            <p className='mt-8'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href="#" className='flex items-center mt-5 text-sky-600 hover:text-black'>See pricing <span> <FiArrowRight/></span> </a>
        </div>

        <div className='flex  mr-10 '>
            <div className='border border-r-0 border-neutral-400 flex-grow w-[30%] text-center px-5 '>
                <h2 className='text-5xl text-neutral-800 py-6'>₹0</h2>
                <p className='text-neutral-500 font-light'>Free equity delivery and direct mutual funds</p>
            </div>
            <div className='border border-neutral-400 flex-grow w-[30%] text-center '>
                <h2 className='text-5xl text-neutral-800 py-6'>₹20</h2>
                <p className='text-neutral-500 font-light'>Intraday and F&O</p>
            </div>
        </div>
    </div>
    <div className='mt-20'>
        <div className='flex items-center w-full '>
          <div className=' w-[70%]'>
            <img src={varity} className='' alt="" />
          </div>
          <div className='pl-20  '>
            <h2 className='text-3xl'>Free and open market education</h2>
            <p className='mt-8 text-neutral-600 font-light'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a className='flex items-center gap-1 text-sky-600 mt-8 hover:text-black' href="#">Varsity <span><FiArrowRight/></span></a>
            <p className='mt-8 text-neutral-600 font-light'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a className='text-sky-600 flex items-center gap-1 mt-8 hover:text-black' href="#">Trading Q&A <span><FiArrowRight/></span></a>
          </div>

        </div>

    </div>
    <div className='text-center mt-20 '>
        <h2 className='text-3xl tracking-wide mb-6'>Open a Zerodha Account</h2>
        <p className='text-neutral-500 font-thin mb-10'>Modern platfroms and app ,₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <a href="#" className='bg-sky-600 px-8 text-xl py-2 text-white rounded-sm hover:bg-black'>Sign up now</a>
    </div>
    </div>
  )
}

export default Pricing