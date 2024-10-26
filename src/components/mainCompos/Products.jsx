"use client"

import dynamic from 'next/dynamic';
import { useEffect } from "react";
import HeadingTwo from "../typography/HeadingTwo";
import { products } from "@/constants/products";
import Image from "next/image";
import Link from 'next/link';

// Dynamically import tw-elements without SSR
const Products = () => {
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
    <>
      <section className="py-20 bg-[#ccaa8a9c] flex justify-center shadow-lg items-center flex-col gap-20">
        <HeadingTwo title={"OUR PRODUCTS"} />
        <div className="grid xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 sm:px-20 px-5 xl:px-10 gap-10">
          {products.map((item) => {
            const { id, title, description, img } = item;
            return (
              <div
                key={id}
                className="rounded-xl overflow-hidden flex-col flex justify-center items-center bg-white shadow-grey-200 shadow-lg dark:bg-surface-dark"
              >
                <div
                  className="relative bg-cover bg-no-repeat overflow-hidden h-48 md:h-56 xl:h-64 p-5"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                        <img src={img} alt="Product 1"
                          className="h-full w-full object-contain" />
                  <a href="#!">
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
                <div className="p-6 text-surface dark:text-white flex flex-col items-center ">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-center capitalize kanit-medium">
                    {title}
                  </h5>
                  <p className="mb-4 text-center text-sm">{description}</p>
                  <Link href={`/products/${id}`}>
                  <button
                            type="button"
                            className="rounded-tl-[10px] rounded-br-[10px] bg-[#f58720] px-6 py-1 text-md kanit-regular uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                          >
                            View More
                          </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>


        <Link href={"/products"}>
          <button className="rmbtnBlue rounded-md capitalize">
            Explore More Products
          </button>
        </Link>

      </section>
    </>
  );
};

export default Products;
