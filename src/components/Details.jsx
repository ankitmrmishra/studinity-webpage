import React from "react";
import { GiTeacher } from "react-icons/gi";
import { PiChalkboardTeacherDuotone, PiUserFocusDuotone } from "react-icons/pi";

function Details() {
  return (
    <div
      id='aboutus'
      className=' lg:h-[779px] bg-gradient-to-r from-blue-700 to-violet-500 border  p-5  '
    >
      <div className='-mt-11'>
        <span className='heading_text pt-32 heading flex flex-row items-center text-center align-middle justify-center lg:text-5xl text-3xl text-white font-extrabold'>
          Why to{" "}
          <span className='text-teal-300 lg:pl-5 lg:pr-5 pl-1 pr-1 '>
            {" "}
            Learn{" "}
          </span>
          With Us?
        </span>
        <div className='subtitle pt-8  flex flex-row items-center text-center align-middle justify-center text-slate-700'>
          <span className='w-[40rem] text-slate-200'>
            At <span className='text-teal-300 pl-1 pr-1 '> Studinity </span>, we
            believe that education is the cornerstone of success, and with our
            comprehensive, expert-led courses, we strive to empower individuals
            to realize their full potential and achieve their loftiest
            aspirations.
          </span>
        </div>
        <div className='key_points lg:grid grid-cols-3 lg:p-28 text-white items-center p-5 mt-10'>
          <div className='point1 flex flex-col align-center text-center justify-between items-center mt-8'>
            <span className='text-8xl text-white'>
              <GiTeacher />
            </span>
            <span className='text-2xl text-teal-300'>Expert-Led Learning</span>
            <span className=''>
              Learn from industry experts, gaining practical insights for
              real-world success.
            </span>
          </div>

          <div className='point2 flex flex-col align-center text-center justify-between items-center mt-8 '>
            <span className='text-8xl text-white'>
              <PiChalkboardTeacherDuotone />
            </span>
            <span className='text-2xl text-teal-300'>
              {" "}
              Diverse Course Offerings
            </span>
            <span className=''>
              Access a range of interactive courses tailored to various skill
              levels and learning styles.
            </span>
          </div>
          <div className='point3 flex flex-col align-center text-center justify-between items-center mt-8'>
            <span className='text-8xl text-white'>
              <PiUserFocusDuotone />
            </span>
            <span className='text-2xl text-teal-300'>
              Career-Focused Approach
            </span>

            <span className=''>
              Benefit from comprehensive career support services, ensuring a
              seamless transition into the workforce.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
