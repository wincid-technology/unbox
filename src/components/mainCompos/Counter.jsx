"use client"

import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';

const Counter = () => {
  const [countOn, setCountOn] = useState(false)
  return (
    <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
      <section className="bg-white w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center">
      <div className="flex w-64 md:w-full py-4 mx-auto md:border-b-0 gap-2 justify-center items-center flex-col md:py-4 md:my-8 border-b md:border-r border-gray-200">
        <h1 className="text-[max(3vw,18px)] kanit-medium text-[#0F063F] m-0">
          {
            countOn && <CountUp start={0} end={20} duration={0.9} delay={0.5} />
          }
          
        </h1>
        <span className="text-[max(1vw,12px)] text-[#f58720]">Years of Experience</span>
      </div>
      <div className="flex w-64 md:w-full py-4 mx-auto md:border-b-0 gap-2 justify-center items-center flex-col md:py-4 md:my-8 border-b md:border-r border-gray-200">
        <h1 className="text-[max(3vw,18px)] kanit-medium text-[#0F063F] m-0">
          {
            countOn && <CountUp start={0} end={100} duration={0.9} delay={0.5} />
          }
          +
        </h1>
        <span className="text-[max(1vw,12px)] text-[#f58720]">Global Customers</span>
      </div>
      <div className="flex w-64 md:w-full py-4 mx-auto md:border-b-0 gap-2 justify-center items-center flex-col md:py-4 md:my-8 border-b md:border-r border-gray-200">
        <h1 className="text-[max(3vw,18px)] kanit-medium text-[#0F063F] m-0">
          {
            countOn && <CountUp start={0} end={350} duration={0.9} delay={0.5} />
          }
          
        </h1>
        <span className="text-[max(1vw,12px)] text-[#f58720]">Employees</span>
      </div>
      <div className="flex w-64 md:w-full py-4 mx-auto md:border-b-0 gap-2 justify-center items-center flex-col md:py-4 md:my-8 border-b md:border-r border-gray-200">
        <h1 className="text-[max(3vw,18px)] kanit-medium text-[#0F063F] m-0">
          {
            countOn && <CountUp start={0} end={80000} duration={0.9} delay={0.5} />
          }
          
        </h1>
        <span className="text-[max(1vw,12px)] text-[#f58720]">Ton's of Corrugated Boxes</span>
      </div>
      
    </section>
    </ScrollTrigger>
    
  )
}

export default Counter
