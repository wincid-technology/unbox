import Link from 'next/link'
import React from 'react'

const ProductDetails = ({ item }) => {
  return (
    <section className="w-screen bg-white">

      <div className="font-sans p-8 tracking-wide  max-lg:max-w-2xl max-w-7xl mx-auto bg-white flex flex-col justify-center">

        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
          <div>
            <div className="flex gap-4 text-center">
              <div className="shadow-[rgba(17,_17,_26,_0.2)_0px_0px_10px] p-4 flex items-center sm:h-[380px] rounded">
                <img src={item.img} alt="Product" className="w-full max-h-full object-contain object-top" />
              </div>

              <div className="space-y-4">
                <div className="shadow-[rgba(17,_17,_26,_0.2)_0px_0px_10px] p-4 flex items-center rounded sm:h-[182px]">
                  <img src={item.img2} alt="Product" className="w-full max-h-full object-contain object-top" />
                </div>

                <div className="shadow-[rgba(17,_17,_26,_0.2)_0px_0px_10px] p-4 flex items-center rounded sm:h-[182px]">
                  <img src={item.img3} alt="Product" className="w-full max-h-full object-contain object-top" />
                </div>
              </div>
            </div>

            
          </div>

          <div className="max-w-xl">

            <div>
              <h2 className="text-3xl font-extrabold text-[#f58720] kanit-medium capitalize mb-2">{item.title}</h2>
            </div>


            <div className="mt-8">
              <ul className="flex border-b">
                <li
                  className="text-[#0f063f] kanit-medium font-bold text-sm py-3 border-gray-800 cursor-pointer transition-all">
                  Product Description</li>
              </ul>

              <div className="mt-2">
                <p className="text-sm text-[#0f063f] kanit-light mt-4">{item.desc}</p>
              </div>
            </div>


            <div className="flex gap-4 justify-center lg:justify-end">
            <Link href={`/contact`}>
                  <button
                            type="button"
                            className="rounded-tl-[10px] my-8 rounded-br-[10px] bg-[#f58720] px-8 py-3 text-md kanit-regular uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 hover:bg-[#db7e27] dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                          >
                            Contact for this Product
                          </button>
                  </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ProductDetails
