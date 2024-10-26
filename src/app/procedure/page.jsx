import HeadingTwo from '@/components/typography/HeadingTwo'
import Image from 'next/image'
import React from 'react'

const ProcedurePage = () => {
  return (
    <section className="flex flex-col">

      <div className="relative bg-black py-48 font-[sans-serif]">
        <div className="absolute inset-0">
          <Image
            src={"/img/procedure.jpg"}
            alt="Procedure Section Image"
            height={20000}
            width={20000}
            className="w-full h-full object-cover opacity-40"
          />
        </div>


        <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
          <span className="source-sans-400 text-[max(7vw,40px)] justify-center flex-wrap flex leading-none gap-1 sm:gap-4">
            <span className="bg-clip-text bg-gradient-to-t kanit-regular from-slate-400 to-white text-transparent opacity-70">Our Procedure</span>
          </span>
        </div>
      </div>


      <div className="flex items-center justify-center py-20 ">
        <Image
          src={'/img/boxpro.png'}
          height={1000}
          width={1500}
          className=""
        />
      </div>


        <div className="max-w-screen w-screen max-md:max-w-screen mx-auto font-[sans-serif] py-20 flex flex-col gap-8 bg-[#e7e7e7]">
        <HeadingTwo title={"different types of board"} />
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <img src="/procedure/procedure2.jpg" className="w-full rounded-md shadow-[0_3px_16px_rgb(0,0,0,0.3)]" />
            </div>

            <div className="xl:col-span-2 max-md:px-6">
              <div>
                <p className="text-md text-[#0f063f] leading-relaxed kanit-light">Corrugated boards come in various types, each designed to meet specific packaging needs. Single wall, double wall, and triple wall boards offer varying degrees of strength and durability, while specialized options like waxed, anti-static, and recycled boards provide additional benefits such as moisture resistance, environmental sustainability, and protection for sensitive items.</p>
              </div>

              <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-6 mt-12">
                <div className="flex items-center gap-3">
                  <img src="/procedure/1.png" className="w-10" alt="lw" />
                  <h6 className="text-base text-gray-800 kanit-light-italic">Lightweight</h6>
                </div>


                <div className="flex items-center gap-3">
                <img src="/procedure/2.png" className="w-10" alt="lw" />
                  <h6 className="text-base text-gray-800 kanit-light-italic">Cost-effective</h6>
                </div>


                <div className="flex items-center gap-3">
                <img src="/procedure/3.png" className="w-10" alt="lw" />
                  <h6 className="text-base text-gray-800 kanit-light-italic">Suitable for Light to Medium Loads</h6>
                </div>


                <div className="flex items-center gap-3">
                <img src="/procedure/4.png" className="w-10" alt="lw" />
                  <h6 className="text-base text-gray-800 kanit-light-italic">Durable</h6>
                </div>


                <div className="flex items-center gap-3">
                <img src="/procedure/5.png" className="w-10" alt="lw" />
                  <h6 className="text-base text-gray-800 kanit-light-italic">Water-Resistant</h6>
                </div>


                <div className="flex items-center gap-3">
                <img src="/procedure/6.png" className="w-10" alt="lw" />
                  <h6 className="text-base text-gray-800 kanit-light-italic">Eco-Friendly</h6>
                </div>


                <div className="flex items-center gap-3">
                <img src="/procedure/7.png" className="w-10" alt="lw" />
                  <h6 className="text-base text-gray-800 kanit-light-italic">Enhances Printability</h6>
                </div>


                <div className="flex items-center gap-3">
                <img src="/procedure/8.png" className="w-10" alt="lw" />
                  <h6 className="text-base text-gray-800 kanit-light-italic">Moisture and Chemical Resistance</h6>
                </div>


                <div className="flex items-center gap-3">
                <img src="/procedure/9.png" className="w-10" alt="lw" />
                  <h6 className="text-base text-gray-800 kanit-light-italic">Economical for Internal Packaging</h6>
                </div>


              </div>
            </div>
          </div>
        </div>

    </section>
  )
}

export default ProcedurePage
