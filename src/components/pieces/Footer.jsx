import { footerLinks } from "@/constants/footer";
import { BsInstagram, BsTwitterX, BsLinkedin } from "react-icons/bs";
import { MdFacebook, MdWhatsapp } from "react-icons/md";
import Link from "next/link";
import LogoFull from "./LogoFull";

const Footer = () => {
  const date = new Date;
  const year = date.getFullYear();
  return (
    <footer className="bg-white px-[10%] py-10 border-t z-50">
      <div className="flex flex-col lg:flex-row justify-between items-center md:flex-nowrap flex-wrap">
        <div className="">
          <div className="flex items-center flex-col gap-3 w-fit flex-wrap">
            <LogoFull />
            <div className="text-center mx-auto flex flex-col items-center">

              <h2 className="flex items-center gap-2 text-black w-fit text-xs md:text-xl text-center">
                <hr className="w-10 md:w-20 border-black" />
                QUALITY MATTERS
                <hr className="w-10 md:w-20 border-black" />
              </h2>
            </div>
          </div>
          <div>

          </div>

        </div>


        <div className="flex flex-col items-center md:justify-end py-5 lg:py-0">
          

          <div className="flex flex-col md:flex-row my-6 text-center md:justify-end text-[#0f063f] gap-2 md:gap-8 text-[15px]">

            {footerLinks.map((link, i) => {
              const { id, title, href } = link;
              return (
                <a
                  href={href}
                  key={i}
                  className="uppercase block kanit-medium hover:text-[#ff8502] transition-all duration-300" style={{ letterSpacing: "1px" }}
                >
                  {title}
                </a>
              );
            })}
          </div>
          <div className="socialIcons flex w-full justify-center lg:justify-end items-center gap-7 lg:gap-5">

            <Link className="changeColor" href={"https://wa.me/9214089242"}><MdWhatsapp className="size-6 md:size-7" /></Link>
            <Link className="changeColor" href={"https://www.facebook.com/login/"}><MdFacebook className="size-6 md:size-7" /></Link>
            <Link className="changeColor" href={"https://www.instagram.com/accounts/login/"}><BsInstagram className="size-5 md:size-6" /></Link>
            <Link className="changeColor" href={"https://twitter.com/"}><BsTwitterX className="size-5 md:size-6" /></Link>
            <Link className="changeColor" href={"https://in.linkedin.com/"}><BsLinkedin className="size-5 md:size-6" /></Link>
            
            
            
          </div>
        </div>
      </div>
      <hr className="my-5" />


      <div className="">
        <h3 className="font-normal kanit-light md:text-xl text-[#0f063f] text-sm text-center">
          {year} <span className="source-sans-300">&copy;</span> Copyright: <a className="text-[#ff8502]" href="/">Sunshine Coropack</a>
        </h3>
      </div>


    </footer>
  );
}
export default Footer