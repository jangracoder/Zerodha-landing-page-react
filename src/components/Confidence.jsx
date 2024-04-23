import React from 'react'
import ecosystem from '../assets/ecosystem.png'
import { FiArrowRight } from "react-icons/fi";

function Confidence() {

    const data =[
        {label:'Customer-first always',val:'That\'s why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.'},
        {label:'No spam or gimmicks',val:'No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.'},
        {label:'The Zerodha universe',val:'Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.'},
        {label:'Do better with money',val:'With initiatives like Nudge and Kill Switch, we don\'t just facilitate transactions, but actively help you do better with your money.'},
        
    ]

  return (
    <div className='mt-32 mx-48 flex gap-10 items-center'>
        <div className='w-[57%]'>
            <h2 className='text-4xl text-neutral-900'> Trust with confidence</h2>
            <div className='mt-12'>
                {data.map((item,index)=>(
                   <div key={index} className='  mb-10'>
                    <h3 className='text-xl tracking-wide'>{item.label}</h3>
                    <p className='mt-4 tracking-wide text-neutral-500 font-light'>{item.val}</p>
                   </div>

                ))}
            </div>
        </div>
        <div>
        <img src={ecosystem} className='px-5 ' alt="" />
        <div className=' text-sky-600 flex gap-10 justify-center'>
           <div className='flex items-center gap-1'>
            <h4>Explore our products </h4>
            <FiArrowRight/>
           </div>
           <div className='flex items-center gap-1'>
           <h4>Try Kite demo</h4>
           <FiArrowRight/>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Confidence