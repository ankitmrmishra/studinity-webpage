import React from "react";
import heroimage from "/src/assets/photo-1.avif";

import { BsCartPlus } from "react-icons/bs";
function courseCard() {
  return (
    <div className='mt-7'>
      <div className='card w-[20rem] h-[25rem] bg-white flex flex-col justify-center items-center align-middle  rounded-t-none rounded-xl'>
        <div className='card-component-1 -mt-8 '>
          <img src={heroimage} alt='' className=' object-cover' />
        </div>
        <div className='card-component-2 w-full flex flex-row justify-between items-center align-middle px-6 py-2'>
          <div className='teacher text-teal-500'>Ankit Mishra</div>
          <div className='duration bg-red-100 rounded-lg p-1'>3 hours</div>
        </div>
        <div className='card-component-3 text-xl p-3 font-semibold'>
          <span>Course Name Lorem ipsum dolor sit amet.</span>
        </div>
        <div className='card-component-4 w-full flex flex-row justify-between items-center align-middle px-6 py-2'>
          <div className='price text-green-600'>900RS</div>
          <div className='cartlogo text-xl'>
            <BsCartPlus />
          </div>
        </div>
      </div>
    </div>
  );
}

export default courseCard;
