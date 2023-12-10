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
      <div className='upper_part flex flex-col lg:flex-row'>
        <div className='details_section flex flex-col align-middle text-center justify-between items-center w-[30rem] p-14'>
          <div className='  flex items-center justify-between align-middle '>
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
        <div className='links_setion pl-14 lg:p-14'>
          <div className='text-xl m-[1rem] font-bold bg-gradient-to-l from-teal-300 to-teal-200 bg-clip-text  text-transparent'>
            <span>QUICK</span>
            <span>LINKS</span>
          </div>

          <div className='flex flex-col align-middle justify-center lg:items-center text-white/75 p-5 '>
            <Link
              className='hover:cursor-pointer'
              to='featuredCourses'
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
              to='aboutus'
              smooth={true}
              duration={500}
            >
              About us
            </Link>
          </div>
        </div>
        <div className='contact_us_section flex flex-col justify-between  pl-14 lg:p-14'>
          <div className='text-xl m-[1rem] font-bold bg-gradient-to-l from-teal-300 to-teal-200 bg-clip-text  text-transparent'>
            Contact Us
          </div>

          <div className='contact_us_parts  text-white/75 p-5 lg:p-16 gap-3'>
            <div className='phone hover:cursor-pointer'>
              <BsFillTelephoneFill />
              +919988998856
            </div>
            <div className='phone hover:cursor-pointer'>
              <BiLogoGmail />
              ankitmrmishra1118@gmail.com
            </div>
            <div className='phone hover:cursor-pointer'>
              <FaLocationDot />
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
        <div className='mt-5 socials flex justify-center items-center align-middle gap-6 font-extrabold text-2xl text-teal-400'>
          <SlSocialBehance className='text-4xl border rounded-full p-2' />
          <SlSocialFacebook className='text-4xl border rounded-full p-2' />
          <SlSocialInstagram className='text-4xl border rounded-full p-2' />
          <SlSocialReddit className='text-4xl border rounded-full p-2' />
          <SlSocialTwitter className='text-4xl border rounded-full p-2' />
          <TiSocialLinkedin className='text-4xl border rounded-full p-2' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
