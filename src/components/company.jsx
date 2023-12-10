import React from "react";
import amazon from "/src/assets/amazon.png";
import apple from "/src/assets/apple.png";
import google from "/src/assets/google.png";
import microsoft from "/src/assets/microsoft.png";
import one from "/src/assets/one.png";
import two from "/src/assets/two.png";
import three from "/src/assets/three.png";
import four from "/src/assets/four.png";
import five from "/src/assets/five.png";
import six from "/src/assets/six.png";
import seven from "/src/assets/seven.png";
import eight from "/src/assets/eight.png";
import nine from "/src/assets/nine.png";
import ten from "/src/assets/ten.png";
import Marquee from "react-fast-marquee";

const companies = [one, two, three, four, five, six, seven, eight, nine, ten];

function company() {
  return (
    <div className='border flex flex-col justify-center align-middle'>
      <div className=' lg:pt-20 pt-5 font-bold lg:pb-14  heading flex flex-row items-center text-center align-middle justify-center lg:text-5xl text-2xl '>
        <span className='text1 '>Our</span>
        <span className='text1 text-teal-600 ml-2 mr-2'>Students</span>

        <span className='text1 '>
          {" "}
          are <span className='text1 text-teal-600 '>working</span> at
        </span>
      </div>
      <Marquee direction='right' speed={100} delay={5}>
        {companies.map((items) => (
          <div className=' ml-8 mr-8 mb-5'>
            <img
              className=' flex items-center pt-3 w-24 align-middle justify-center ml-1'
              src={items}
              alt=''
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default company;
