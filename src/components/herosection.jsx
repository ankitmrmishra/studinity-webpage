import React from "react";
import heroimage from "/src/assets/introImage.png";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

function herosection() {
  return (
    <div className=' static overflow-hidden h-[630px] bg-gradient-to-l text-white from-violet-950 to-violet-800 lg:p-16 p-10 pt-20 flex flex-row'>
      <HerosectionLeftPart />
      <HerosectionRightPart />
      <Testimonial />
    </div>
  );
}

function HerosectionLeftPart() {
  return (
    <div className='lg:w-[80rem] w-full '>
      <span className='This-is-the-small-subtitle uppercase text-white  '>
        Elevate Your Education with Our Courses.
      </span>
      <div className='this-is-big-text lg:text-6xl text-3xl font-bold pt-12 '>
        Education is the <span className='text-teal-500'>foundation </span>upon
        which we build our future.
      </div>
      <div className='This-is-buttons pt-12 flex flex-row align-middle  gap-10 lg:gap-16 items-center '>
        <div className='button border border-teal-500 text-center lg:p-4 p-2 lg:w-48 rounded-lg cursor-pointer   font-bold'>
          View Courses
        </div>
        <div className='this-is-search-bar cursor-pointer '>
          Get Free Consultation
        </div>
      </div>
      <div className='this-is-search-bar bg-white justify-center lg:w-[25rem] mt-10 w-[20rem] items-center align-middle text-slate-600 flex flex-row p-2 rounded-lg'>
        {/* <input className='search-area'>What you want Learn today?</input> */}
        <input
          type='text'
          placeholder='What you want Learn?'
          className='border-none p-2 outline-none lg:w-64'
        />
        <div className='search-button text-center text-white  bg-gradient-to-r lg:p-3 p-2  lg:w-32 from-blue-900 to-violet-500 rounded-[10px] border-2'>
          Search
        </div>
      </div>
    </div>
  );
}
function HerosectionRightPart() {
  return (
    <div className='  hidden lg:grid h-full  relative  left-44  '>
      <img className=' ' src={heroimage} alt='' />
    </div>
  );
}

function Testimonial() {
  return (
    <div className='hidden  absolute top-[10rem] lg:flex flex-row w-96 justify-center  align-middle   left-[48rem]'>
      <div
        className='flex justify-center items-center'
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <div
          style={{
            width: 1,
            height: 50,
            left: 60,
            top: 110,
            position: "absolute",
            background: "#2AAA94",
          }}
        />
        <div
          style={{
            width: 1,
            height: 50,
            left: 60,
            top: 10,
            position: "absolute",
            background: "#2AAA94",
          }}
        />
        <div
          style={{
            width: 24,
            height: 24,
            left: 48,
            top: 73,
            position: "absolute",
            background: "#81C7A2",
            borderRadius: 9999,
          }}
        />
        <div
          style={{
            width: 8.91,
            height: 7,
            left: 56,
            top: 80,
            position: "absolute",
            background: "white",
          }}
        ></div>
      </div>
      <div>
        <span className='font-extrabold text-teal-500 text-4xl'>"</span>
        <span className='text-sm'>
          I can't thank <span className='text-teal-500'> STUDINITY </span>enough
          for the incredible learning experience it has provided me. As someone
          who is always seeking to expand my knowledge and skills, I've tried
          numerous online learning platforms, but STUDINITY stands out as the
          best.
        </span>
        <span className='text-teal-500 flex flex-row pt-6'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <BsStarHalf />
        </span>
      </div>
    </div>
  );
}
export default herosection;
