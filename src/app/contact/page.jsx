"use client"


import HeadingTwo from '@/components/typography/HeadingTwo'
import { contact } from '@/constants/contact'
import Link from 'next/link';
import React, { useState } from 'react'
import { MdOutlineWhatsapp, MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { supabase } from '@/lib/supabaseClient';
import MsgModal from '@/components/mainCompos/MsgModal';

const ContactPage = () => {


  const { phone, phoneTwo, email } = contact;

    // State for form data
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  
    // State for form submission status
    const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show the modal immediately when the button is clicked
    setIsModalVisible(true);

    setIsSubmitting(true);

    const uniqueId = `${Math.floor(Math.random() * 1000)}`;
    const currentDate = new Date();

    const dataToInsert = {
      ...formData,
      unique_id: uniqueId,
      created_at: currentDate,
    };

    try {
      const { data, error } = await supabase
        .from('Contact Entries')
        .insert([dataToInsert]);

      if (error) throw error;

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error sending message:', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

    

  return (
    <div>

      {/* Modal Component */}
      <MsgModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} />

      <div className="kanit-light">
        <div className="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-80">
          <img src="/img/contact.jpg" alt="Banner Image" className="w-full h-full object-cover" />
        </div>

        <div className="-mt-32 pb-20 px-5 md:px-20 lg:px-36 bg-[#e7e7e7]">
          <div className="mx-auto max-w-7xl shadow-lg p-5 sm:p-10 relative bg-white rounded-md flex flex-col gap-10">
            <HeadingTwo title={"Contact Us"} />

            <div className="grid lg:grid-cols-2 items-start gap-12">
              <form className="space-y-3 text-gray-800" onSubmit={handleSubmit}>
                <input type='text' placeholder='Name'
                  className="w-full bg-gray-100 rounded py-3 px-6 text-md focus:bg-transparent focus:outline-[#f58720]" name="name" value={formData.name} onChange={handleChange} required />



                <input type='email' placeholder='Email'
                  className="w-full bg-gray-100 rounded py-3 px-6 text-md focus:bg-transparent focus:outline-[#f58720]" name="email" value={formData.email} onChange={handleChange} required />



                <input type='text' maxLength={"10"} placeholder='Phone No.'
                  className="w-full bg-gray-100 rounded py-3 px-6 text-md focus:bg-transparent focus:outline-[#f58720]" name="phone" value={formData.phone} onChange={handleChange} required />


                <textarea placeholder='Message' rows="6"
                  className="w-full bg-gray-100 rounded px-6 textmd pt-3 focus:bg-transparent focus:outline-[#f58720]" name="message" value={formData.message} onChange={handleChange} required></textarea>

                <div className="flex items-center justify-center">
                  <button type='submit'
                    className="text-white bg-[#f58720] hover:bg-[#d57b26] rounded text-md px-6 py-3 duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' className="mr-2 inline" viewBox="0 0 548.244 548.244">
                      <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" data-original="#000000" />
                    </svg>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

              </form>

              <div className="grid grid-cols-1 gap-8">
                <a href="#map" className="flex items-center bg-white">
                  <div className="shadow-[0_0px_2px_0px_rgba(6,81,237,0.3)] rounded px-3 py-2">
                    <GrLocation className="size-6" color="#f58720" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-[#0f063f] text-xl kanit-medium font-bold">Visit office</h4>
                    <p className="text-sm md:text-[1rem] kanit-light  text-gray-500 mt-1">Plot No. 7, Arjunpura, Khalsa, Ajmer (Raj.)</p>
                  </div>
                </a>

                <div className="flex items-center bg-white">
                  <div className="shadow-[0_0px_2px_0px_rgba(6,81,237,0.3)] rounded px-3 py-2">
                    <FiPhoneCall className="size-6" color="#f58720" />
                  </div>
                  <div className="ml-4 flex flex-col items-start">
                    <h4 className="text-[#0f063f] text-xl kanit-medium font-bold">Call us</h4>

                    <div className="flex gap-0 sm:gap-5 flex-wrap">
                      <Link className="text-sm md:text-[1rem] kanit-light text-gray-500 mt-1" href={`tel:${phone}`}>+91-9829189242</Link>
                      <Link className="text-sm md:text-[1rem] kanit-light text-gray-500 mt-1" href={`tel:${phoneTwo}`}>+91-9414089242</Link>
                    </div>

                  </div>
                </div>

                <Link href={`https://wa.me/9829189242`} className="flex items-center bg-white">
                  <div className="shadow-[0_0px_2px_0px_rgba(6,81,237,0.3)] rounded px-3 py-2">
                    <MdOutlineWhatsapp className="size-6" color="#f58720" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-[#0f063f] text-xl kanit-medium font-bold">Chat to us</h4>
                    <p className="text-sm md:text-[1rem] kanit-light text-gray-500 mt-1">{phone}</p>
                  </div>
                </Link>

                <Link href={"mailto:sunshinecoropack@yahoo.com"} className="flex items-center bg-white">
                  <div className="shadow-[0_0px_2px_0px_rgba(6,81,237,0.3)] rounded px-3 py-2">
                    <MdOutlineMailOutline className="size-6" color="#f58720" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-[#0f063f] text-xl kanit-medium font-bold">E-mail</h4>
                    <p className="text-xs md:text-[1rem] kanit-light text-gray-500 mt-1">{email}</p>
                  </div>
                </Link>
              </div>
            </div>


            <hr className="my-2" />




            <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.633553946593!2d74.53013807567098!3d26.30597697701407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396961c66e882ab1%3A0x59fe738eb4e6f485!2sSunshine%20Coropack!5e0!3m2!1sen!2sin!4v1729666641538!5m2!1sen!2sin" className="w-full" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>




          </div>



        </div>

      </div>




    </div>
  )
}

export default ContactPage
