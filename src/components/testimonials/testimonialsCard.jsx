import React from "react";
import heroimage from "/src/assets/testimonial_image.avif";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

function testimonialsCard() {
  return (
    <div className='bg-gradient-to-b from-blue-200 to-violet-100  backdrop-blur-lg border-[1px] border-solid border-white border-opacity-30 rounded-lg p-6 m-10 h-96 w-72 flex flex-col justify-evenly drop-shadow-2xl shadow-black/70 shadow-2xl'>
      <div className='top_part flex justify-between align-middle items-center'>
        <div className='image  '>
          <img
            className='h-16 w-16 rounded-full bg-black flex justify-center items-center align-middle'
            src={heroimage}
            alt='imgs'
          />
        </div>
        <div className='Name text-teal-500 font-bold'>ANKIT MISHRA</div>
      </div>
      <div className='text_part_  '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sint
        ratione sapiente est quae animi quaerat non dolore amet sed numquam
        fugit rem quam
      </div>
      <div className='review_star'>
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

export default testimonialsCard;
