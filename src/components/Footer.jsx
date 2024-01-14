import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-scroll";
import {
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialReddit,
  SlSocialFacebook,
  SlSocialBehance,
} from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";

function Footer() {
  return (
    <div className=' overflow-hidden bg-gradient-to-r from-blue-700 to-violet-500 border flex flex-col items-center justify-center align-middle p-4'>
      <div className='upper_part flex flex-col lg:flex-row '>
        <div className='details_section flex flex-col align-top text-center justify-start items-center w-[30rem] p-14 '>
          <div className='  flex items-center justify-center  '>
            <span className='logo text-4xl m-[1rem] font-extrabold bg-gradient-to-l from-teal-300 to-teal-200 bg-clip-text  text-transparent'>
              STUDINITY
            </span>
          </div>
          <span className='text-white/75'>
            We are passionately dedicated to providing a comprehensive range of
            high-quality educational resources, meticulously curated to empower
            learners of all backgrounds and skill levels.
          </span>
        </div>
        <div className='etails_section  flex flex-col align-middle text-center justify-start items-center w-[30rem] p-14'>
          <div className='text-4xl m-[1rem] font-bold bg-gradient-to-l from-teal-300 to-teal-200 bg-clip-text  text-transparent'>
            <span>Quick</span>
            <span className='pl-1'>Links</span>
          </div>

          <div className='flex flex-col align-middle justify-center lg:items-center text-white/75 '>
            <Link
              className='hover:cursor-pointer'
              to='Courses'
              smooth={true}
              duration={500}
            >
              Courses
            </Link>
            <Link
              className='hover:cursor-pointer'
              to='testimonials'
              smooth={true}
              duration={500}
            >
              Testimonials
            </Link>
            <Link
              className='hover:cursor-pointer'
              to='about'
              smooth={true}
              duration={500}
            >
              About us
            </Link>
          </div>
        </div>
        <div className='etails_section flex flex-col align-middle  justify-start items-center w-[30rem] p-14 '>
          <div className='text-4xl m-[1rem] font-bold bg-gradient-to-l from-teal-300 to-teal-200 bg-clip-text  text-transparent'>
            Contact Us
          </div>

          <div className='contact_us_parts  text-white/75 p-5  gap-3'>
            <div className='phone hover:cursor-pointer flex flex-col justify-start items-start'>
              <div className='text-2xl'>
                <BsFillTelephoneFill />
              </div>
              +919988998856
            </div>
            <div className='phone hover:cursor-pointer flex flex-col justify-start items-start'>
              <div className='text-2xl'>
                <BiLogoGmail />
              </div>
              ankitmrmishra1118@gmail.com
            </div>
            <div className='phone hover:cursor-pointer flex flex-col justify-start items-start'>
              <div className='text-2xl'>
                <FaLocationDot />
              </div>
              1234 Fictional Street, Citytown, Stateprovince, Countryland,
              12345.
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-[1200px] hidden h-[0px] border border-white border-opacity-30'></div>
      <div className='lower_part flex flex-col justify-around align-middle text-center items-center w-full p-4 '>
        <div className="lg:w-[326px] h-[22px] text-white text-lg font-normal font-['Saira'] leading-7">
          Copyright 2023 | All Rights Reserved
        </div>
        <div className='mt-5 socials flex  gap-6 font-extrabold text-2xl text-teal-200'>
          <div className='border rounded-full p-4 hover:bg-black transition-all delay-75 cursor-pointer '>
            <SlSocialBehance className='text-4xl  ' />
          </div>
          <div className='border rounded-full p-4 hover:bg-black transition-all delay-75 cursor-pointer '>
            <SlSocialFacebook className='text-4xl   ' />
          </div>
          <div className='border rounded-full p-4 hover:bg-black transition-all delay-75 cursor-pointer '>
            <SlSocialInstagram className='text-4xl   ' />
          </div>
          <div className='border rounded-full p-4 hover:bg-black transition-all delay-75 cursor-pointer '>
            <SlSocialReddit className='text-4xl   ' />
          </div>
          <div className='border rounded-full p-4 hover:bg-black transition-all delay-75 cursor-pointer '>
            <SlSocialTwitter className='text-4xl  ' />
          </div>
          <div className='border rounded-full p-4 hover:bg-black transition-all delay-75 cursor-pointer '>
            <TiSocialLinkedin className='text-4xl ' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
