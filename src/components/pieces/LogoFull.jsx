import React from 'react'
import Image from 'next/image'
import { Link } from 'lucide-react'

const LogoFull = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-1 w-fit flex-wrap">
      <a href={"/"} className='flex items-center justify-center flex-col gap-1'>
        <Image
          src="/images/newLogo.png"
          alt=""
          height={35}
          width={35}
          className="w-7 md:w-12"
        />
        <h1 className="text-center mx-auto flex flex-col items-center">
          <div className="flex">
            <span className="md:text-4xl text-md sm:2xl font-bold block tracking-wider text-[#ff8502] kanit-semibold">
              {"SUNSHINE"}
            </span>
            <span className="md:text-4xl text-md sm:2xl font-bold block text-[#0e0640] kanit-semibold">
              {"COROPACK"}
            </span>
          </div>
        </h1>
      </a>

    </div>
  )
}

export default LogoFull
