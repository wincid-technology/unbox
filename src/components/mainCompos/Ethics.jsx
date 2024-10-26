import React from 'react'

import { ethics } from '@/constants/ethics'

const Ethics = () => {
  return (
    <>

      <section className="flex flex-col p-20 w-full bg-[#e7e7e7]">



        <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <h3 className="mb-6 text-3xl font-bold kanit-medium text-[#f58720]">Our Business Ethics</h3>
          <p
            className="mb-6 pb-2 text-neutral-600 dark:text-neutral-300 md:mb-12 md:pb-0">
            At Sunshine Coropack, we uphold the highest standards of business ethics, ensuring transparency, integrity, and responsibility in all operations, while fostering sustainable practices and prioritizing the needs of our clients and community.
          </p>
        </div>


        <div className="grid gap-6 text-center md:grid-cols-2 lg:grid-cols-3 lg:gap-10">

          {
            ethics.map((ethic) => {
              const { id, title, img, alt, desc } = ethic;
              return (
                <>

                  <div className="mb-12 md:mb-0 p-6 bg-white ethicsCard cursor-pointer rounded-tl-[50px] rounded-br-[50px] flex flex-col gap-3 shadow-[rgba(17,_17,_26,_0.2)_0px_0px_16px]" key={id}>
                    <div className="flex justify-center">
                      <img src={img} className='h-20 w-20 ethicLogo' alt={alt} />
                    </div>
                    <h5 className="text-2xl font-semibold kanit-medium ethictitle">{title}</h5>
                    <p className=" text-[#0f063f] dark:text-neutral-300 kanit-light">
                      <span className="inline-block pe-2 [&>svg]:w-5"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="# 0f063f"
                        viewBox="0 0 448 512">

                          <path
                            d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                        </svg>
                      </span>
                      {desc}
                    </p>

                  </div>

                </>
              )
            })
          }

        </div>

      </section>

    </>
  )
}

export default Ethics
