
import { contact } from "@/constants/contact";

import './enq.css';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import HeadingTwo from "../typography/HeadingTwo";
import Link from "next/link";

const Enquiry = () => {

  const { phone, phoneTwo, email } = contact;

  return (
    <>
      <div className="flex flex-col p-10 gap-10 bg-[#e7e7e7]">

        <HeadingTwo title={"Quick Enquiry"} />
        <div className="w-full flex flex-col sm:flex-row gap-5 md:gap-20 justify-center items-center">


          <Link href={`tel:${phone}`} className="card">
            <div className="card-inner">
              <div className="card-front bg-[#0F063F]">
                <p className="flex justify-center flex-col text-[max(1.3vw,18px)] items-center kanit-light gap-3">
                  <FaPhone color={"#f58720"} className="md:size-10 size-6" />
                  {"PHONE"}
                </p>
              </div>
              <div className="card-back flex flex-col">
                <p className="text-[max(1.3vw,15px)]">{contact.phone}</p>
                <p className="text-[max(1.3vw,15px)]">{contact.phoneTwo}</p>
              </div>
            </div>
          </Link>

          <Link href={"mailto:sunshinecoropack@yahoo.com"} className="card">
            <div className="card-inner">
              <div className="card-front bg-[#0F063F]">
                <p className="flex justify-center flex-col text-[max(1.3vw,18px)] items-center kanit-light gap-3">
                  <MdEmail color={"#f58720"} className="md:size-14 size-8" />
                  {"E-MAIL"}
                </p>
              </div>
              <div className="card-back flex flex-col">
                <p className="text-[max(1.3vw,15px)]">{contact.email}</p>
              </div>
            </div>
          </Link>

        </div>

      </div>


    </>
  )
}
export default Enquiry