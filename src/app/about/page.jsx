"use client"

import Ethics from '@/components/mainCompos/Ethics'
import React, { useEffect } from 'react'


const AboutPage = () => {


  useEffect(() => {
    document.title = "Sunshine Coropack - About";
  })

  
  return (
    <>
      <div className="bg-white min-h-screen flex justify-center items-center">


        <section className="mx-auto px-4 md:px-8 flex flex-col h-full items-start lg:items-center">
          <div className="flex flex-wrap lg:justify-between p-10 px-20 lg:p-20  w-screen sm:gap-8 lg:gap-1">
            <div className="flex w-full h-full flex-col justify-center items-center lg:justify-start lg:items-start lg:w-[45%]">
              <h1 className="mb-4 text-4xl text-center lg:text-start font-bold kanit-medium text-transparent bg-gradient-to-l from-[#0F063F] to-[#f58720] bg-clip-text sm:text-5xl md:mb-8 md:text-5xl uppercase">About Us</h1>

              <p className="max-w-full leading-relaxed kanit-light text-[#0F063F] xl:text-lg text-justify">At <b>Sunshine Coropack</b>, we are dedicated to delivering top-quality corrugated boxes designed to meet all your packaging needs. With years of experience in the industry, we understand the importance of durability and sustainability in packaging solutions. Our eco-friendly materials ensure that your products are not only well-protected but also support environmentally responsible practices. We offer a wide range of sizes and custom options to suit various applications, from shipping to retail display. Our team is committed to exceptional customer service, working closely with you to find the perfect packaging solution for your business. Trust us for all your corrugated box needs! <b>Sunshine Coropack</b> is a leading manufacturer specializing in high-quality corrugated boxes, dedicated to providing sustainable and durable packaging solutions for various industries. With years of expertise, we offer a wide range of custom-designed packaging products tailored to meet the specific needs of our clients, ensuring optimal protection and branding. Our commitment to innovation, eco-friendly materials, and exceptional customer service sets us apart in the packaging industry. At <b>Sunshine Coropack</b>, we prioritize delivering cost-effective, reliable packaging solutions that meet industry standards, helping businesses enhance their product presentation while maintaining environmental responsibility.</p>


            </div>

            <div className="flex flex-col sm:flex-row w-full p-10 min-w-1/2 lg:w-1/2 justify-center items-center gap-5 lg:gap-0 z-auto">
              <div className="lg:relative h-60 w-[70vw] sm:w-[50vw] min-w-60 lg:h-96  lg:w-96 lg:left-12 lg:top-12 z-10 imgScale lg:border-[10px] rounded-br-[50px] sm:rounded-br-none sm:rounded-tl-none sm:rounded-tr-[50px] lg:rounded-s-full rounded-tl-[50px] sm:rounded-bl-[50px] lg:rounded-e-none border-white overflow-hidden  md:left-28 md:top-28 lg:ml-0">
                <img src="/img/ab1.jpg" loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-cover object-center" />
              </div>

              <div className="overflow-hidden h-60 w-[70vw] sm:w-[50vw] min-w-60 lg:h-96  lg:w-96 imgScale rounded-br-[50px] lg:rounded-s-none rounded-tl-[50px] lg:rounded-e-full">
                <img src="/img/ab2.jpg" loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-cover object-center" />
              </div>
            </div>

            <p className="max-w-full leading-relaxed kanit-light text-[#0F063F] xl:text-lg text-justify"><b>Sunshine Coropack</b> is a prominent manufacturer of high-quality corrugated boxes, offering innovative and sustainable packaging solutions to a wide range of industries. With a strong commitment to delivering durable and eco-friendly packaging, we specialize in custom-designed corrugated boxes that cater to the specific needs of businesses across various sectors, including retail, food and beverage, electronics, and logistics.

              Our expertise lies in producing a wide array of corrugated packaging, from simple shipping boxes to complex, custom-printed designs that enhance brand visibility. We understand the critical role packaging plays in protecting products during transportation and storage, while also serving as a key element in product presentation and customer experience. By working closely with our clients, we ensure that every box we manufacture meets the highest standards of durability, functionality, and aesthetics.

              At <b>Sunshine Coropack</b>, sustainability is at the core of our manufacturing process. We are committed to using eco-friendly materials and implementing environmentally responsible practices, contributing to the reduction of waste and carbon footprint in the packaging industry. Our corrugated boxes are fully recyclable, and we constantly seek new ways to innovate while maintaining the highest environmental standards.

              What sets us apart is our dedication to customer satisfaction. From initial consultation to delivery, we offer a seamless and responsive experience, ensuring that our clients receive packaging solutions that perfectly align with their needs and timelines. Our advanced manufacturing facilities and skilled team allow us to handle both small and large-scale production efficiently, ensuring quick turnaround times without compromising on quality.

              <b>Sunshine Coropack</b> is more than just a packaging manufacturer – we are a trusted partner for businesses looking for reliable, cost-effective, and sustainable packaging solutions that make a lasting impact.</p>




          </div>
          <Ethics />
        </section>
      </div>
    </>
  )
}

export default AboutPage
