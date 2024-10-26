import React, { useState } from 'react';
import LogoFull from './LogoFull';
import { navProducts } from '@/constants/navProducts';
import Logo from './Logo';
import Link from 'next/link';
import { motion } from "framer-motion"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
      <header className='shadow-md bg-white font-[sans-serif] tracking-wide relative z-50'>
        <div className='flex flex-wrap justify-between px-5 md:px-10 py-3 relative'>
          <LogoFull />
          <div
            id="collapseMenu"
            className={`lg:flex items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-60 max-lg:before:inset-0 max-lg:before:z-50 lg:gap-x-10 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-lg max-lg:overflow-auto z-50 ${isMenuOpen ? 'block' : 'hidden'}`}
          >
            <button
              onClick={handleToggleMenu}
              className='lg:hidden fixed top-8 right-8 z-[100] rounded-full bg-white p-3'
              aria-expanded={isMenuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#0F063F" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </button>

            <ul className='lg:flex lg:gap-x-8 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
              <li className='max-lg:border-b max-lg:pb-4 px-3 lg:hidden'>

                <Logo />

              </li>

              <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'>
                <Link onClick={handleToggleMenu} href='/' className='flex items-center uppercase text-[#0F063F] transition-colors kanit-medium text-md md:text-lg hover:text-[#f58720]'>Home</Link>
              </li>
              <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'>
                <Link onClick={handleToggleMenu} href='/about' className='flex items-center uppercase text-[#0F063F] transition-colors kanit-medium text-md md:text-lg hover:text-[#f58720]'>About</Link>
              </li>
              <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'>
                <Link onClick={handleToggleMenu} href='/procedure' className='flex items-center uppercase text-[#0F063F] transition-colors kanit-medium text-md md:text-lg hover:text-[#f58720]'>Procedure</Link>
              </li>

              <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
                <Link onClick={handleToggleMenu} href='/products' className='hover:fill-[#f58720] flex items-center uppercase text-[#0F063F] transition-colors kanit-medium text-md md:text-lg hover:text-[#f58720]'>
                  Products
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 ms-2 hidden lg:block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                  </svg>

                </Link>

                <ul className='absolute top-10 min-w-[960px] max-lg:top-8 right-0 z-50 block space-y-2 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[900px] rounded-xl transition-all duration-500'>
                  <div className="productGrid lg:grid hidden lg:grid-cols-5 justify-center border-collapse rounded-lg overflow-hidden">
                    {navProducts.map((item) => {
                      const { id, title, img } = item;
                      return (
                        <Link href={`/products/${id}`} key={id}>
                        <span className="flex flex-col justify-center cursor-pointer duration-200 hover:bg-[#f587201e] [&>*:hover]:text-[#f58720] bg-white border border-gray-200 border-b-0 border-r-0 items-center w-48 h-36 p-5">
                          <img src={img} alt={title} height={45} width={45} />
                          <p className="mt-2 text-sm text-center kanit-medium text-black duration-200">{title}</p>
                        </span>
                        </Link>
                      )
                    })}


                  </div>
                </ul>
              </li>
              <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'>
                <Link onClick={handleToggleMenu} href='/contact' className='flex items-center uppercase text-[#0F063F] transition-colors kanit-medium text-md md:text-lg hover:text-[#f58720]'>Contact Us</Link>
              </li>
            </ul>
          </div>

          <div id="toggleOpen" className='flex ml-auto lg:hidden'>
            <button onClick={handleToggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#0F063F" className="size-7 md:size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>

            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
