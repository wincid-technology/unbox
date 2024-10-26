"use client";
import Image from "next/image";
import { useEffect } from "react"
import Hero from "./HeadingOne";


const Carousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  return (
    <div
      id="carouselExampleCrossfade"
      className="relative h-full"
      data-twe-carousel-init
      data-twe-ride="carousel">
      <div
        className="absolute inset-x-0 bottom-0 z-[20] mx-[15%] mb-4 flex list-none gap-2 justify-center p-0"
        data-twe-carousel-indicators>
        <button
          type="button"
          data-twe-target="#carouselExampleCrossfade"
          data-twe-slide-to="0"
          data-twe-carousel-active
          className="mx-[3px] box-content p-2 flex-initial cursor-pointer bg-white bg-clip-padding -indent-[999px] rounded-full opacity-50 transition-opacity duration-&lsqb;600ms&rsqb; ease-&lsqb;cubic-bezier(0.25,0.1,0.25,1.0)&rsqb; motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCrossfade"
          data-twe-slide-to="1"
          className="mx-[3px] box-content p-2 flex-initial cursor-pointer bg-white bg-clip-padding -indent-[999px] rounded-full opacity-50 transition-opacity duration-&lsqb;600ms&rsqb; ease-&lsqb;cubic-bezier(0.25,0.1,0.25,1.0)&rsqb; motion-reduce:transition-none"
          aria-label="Slide 2"></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCrossfade"
          data-twe-slide-to="2"
          className="mx-[3px] box-content p-2 flex-initial cursor-pointer bg-white bg-clip-padding -indent-[999px] rounded-full opacity-50 transition-opacity duration-&lsqb;600ms&rsqb; ease-&lsqb;cubic-bezier(0.25,0.1,0.25,1.0)&rsqb; motion-reduce:transition-none"
          aria-label="Slide 3"></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCrossfade"
          data-twe-slide-to="3"
          className="mx-[3px] box-content p-2 flex-initial cursor-pointer bg-white bg-clip-padding -indent-[999px] rounded-full opacity-50 transition-opacity duration-&lsqb;600ms&rsqb; ease-&lsqb;cubic-bezier(0.25,0.1,0.25,1.0)&rsqb; motion-reduce:transition-none"
          aria-label="Slide 3"></button>
      </div>


      <div
        className="relative overflow-hidden after:clear-both after:block after:content-['']">

          <Hero />

        <div
          className="relative float-left -mr-[100%] h-full !transform-none opacity-0 transition-opacity duration-&lsqb;9  00ms&rsqb; ease-in-out motion-reduce:transition-none"
          data-twe-carousel-fade
          data-twe-carousel-item
          data-twe-carousel-active>
          <img
            src="/img/herosection.jpg"
            className="block h-[87.5vh] w-screen object-cover object-top"
            alt="Hero image 1" />
        </div>

        <div
          className="relative float-left -mr-[100%] hidden !transform-none opacity-0 transition-opacity duration-&lsqb;600ms&rsqb; ease-in-out motion-reduce:transition-none"
          data-twe-carousel-fade
          data-twe-carousel-item>
          <img
            src="/img/rollsHero.jpg"
            className="block h-[87.5vh] w-screen object-cover object-top"
            alt="Hero image 2" />
        </div>

        <div
          className="relative float-left -mr-[100%] hidden !transform-none opacity-0 transition-opacity duration-&lsqb;600ms&rsqb; ease-in-out motion-reduce:transition-none"
          data-twe-carousel-fade
          data-twe-carousel-item>
          <img
            src="/img/hero.jpeg"
            className="block h-[87.5vh] w-screen object-cover object-top"
            alt="Hero image 3" />
        </div>

        <div
          className="relative float-left -mr-[100%] hidden !transform-none opacity-0 transition-opacity duration-&lsqb;600ms&rsqb; ease-in-out motion-reduce:transition-none"
          data-twe-carousel-fade
          data-twe-carousel-item>
          <img
            src="/img/hero33.jpg"
            className="block h-[87.5vh] w-screen object-cover object-top"
            alt="Hero image 4" />
        </div>
      </div>


      <button
        className="absolute bottom-0 left-0 top-0 z-30 flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-&lsqb;cubic-bezier(0.25,0.1,0.25,1.0)&rsqb; hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleCrossfade"
        data-twe-slide="prev">
        <span className="inline-flex justify-center items-center h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Previous</span>
      </button>

      <button
        className="absolute bottom-0 right-0 top-0 z-30 flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-&lsqb;cubic-bezier(0.25,0.1,0.25,1.0)&rsqb; hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleCrossfade"
        data-twe-slide="next">
        <span className="inline-flex justify-center items-center h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Next</span>
      </button>
    </div>
  );
};

export default Carousel;