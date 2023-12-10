import React from "react";
import TestimonialsCard from "./testimonials/testimonialsCard";
function testimonials() {
  return (
    <div
      id='testimonials'
      className=' text-black   bg-gradient-to-b from-blue-200 to-violet-300 pb-32 '
    >
      <div className=' pt-32 heading flex flex-row items-center text-center align-middle justify-center text-5xl'>
        <span className='text1 '>Testi</span>
        <span className='text1 text-teal-600'>monials</span>
      </div>
      <div className='testimonials_sections flex lg:flex-row flex-col align-middle justify-center '>
        <TestimonialsCard />
        <TestimonialsCard />
        <TestimonialsCard />
      </div>
    </div>
  );
}

export default testimonials;
