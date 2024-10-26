"use client"


import HeadingTwo from '@/components/typography/HeadingTwo';
import { allproducts } from '@/constants/allproducts';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect } from 'react'

const ProductsPage = () => {

  useEffect(() => {
    // Dynamically import tw-elements after component is mounted on the client side
    const loadTwElements = async () => {
      const { Ripple, initTWE } = await import("tw-elements"); // Import the module
      initTWE({ Ripple });  // Initialize the library
    };

    if (typeof window !== "undefined") {
      loadTwElements();  // Load tw-elements on the client side only
    }
  }, []);

  return (
    <section>

      <div className="relative bg-black py-48 font-[sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={"/products/products.jpg"}
            alt="Procedure Section Image"
            height={20000}
            width={20000}
            className="w-full h-full object-cover opacity-40"
          />
        </div>


        <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
          <span className="source-sans-400 text-[max(7vw,40px)] justify-center flex-wrap flex leading-none gap-1 sm:gap-4">
            <span className="bg-clip-text bg-gradient-to-t kanit-regular from-slate-400 to-white text-transparent opacity-70">Exclusive Products</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col bg-[#e7e7e7] p-5 sm:px-0 lg:py-20 gap-5 items-center mx-auto text-center">
        <HeadingTwo title={"Our Products"} />


        <p className="text-md text-[#0f063f] leading-relaxed kanit-light md:max-w-xl lg:max-w-3xl">At Sunshine Coropack, we specialize in crafting high-quality corrugated boxes designed to protect and showcase your products. Our durable, eco-friendly packaging solutions are tailored to meet your business’s unique needs.</p>

        <div className="kanit-regular">
          <div className="p-0 sm:p-8 md:p-10 mx-auto lg:max-w-full sm:max-w-full">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-xl:gap-4 gap-6">
              {
                allproducts.map((product) => {

                  const { img, id, title } = product;

                  return (
                    <div key={id} className="bg-white rounded-2xl p-5 inline-flex gap-3 flex-col cursor-pointer hover:-translate-y-2 transition-all duration-500 relative shadow-grey-200 shadow-lg">


                      <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                        <img src={img} alt="Product 1"
                          className="h-full w-full object-contain" />
                      </div>
                      <h3 className="text-xl kanit-medium text-gray-800 capitalize mt-5 mb-2">{title}</h3>


                      <Link href={`/products/${id}`}>

                        <div>
                          <button
                            type="button"
                            className="rounded-tl-[10px] rounded-br-[10px] bg-[#f58720] px-6 py-1 text-md kanit-regular uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                          >
                            View More
                          </button>
                        </div>
                      </Link>



                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>


      </div>




    </section>
  )
}

export default ProductsPage
