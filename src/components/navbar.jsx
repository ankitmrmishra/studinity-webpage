import React from "react";
import { Link } from "react-router-dom";
import { BsCartCheckFill, BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
const navmidItems = ["Home", "About", "Courses", "Shop", "Events"];
function navbar() {
  return (
    <div className=' lg:h-[119px] h-[70px] font-display  flex  flex-row align-middle  justify-between text-center items-center '>
      <NavbarLeft />
      <NavbarMiddle />
      <NavbarRight />
    </div>
  );
}

function NavbarMiddle() {
  return (
    <div className=' lg:h-[119px] lg:flex lg:relative hidden  absolute top-0   w-full   text-teal-500 flex-row items-center justify-between align-middle'>
      {navmidItems.map((item) => (
        <div className='list-none m-[2rem] text-lg hover:bg-red-200 transform transition-all  delay-75'>
          <li>{item}</li>
        </div>
      ))}
    </div>
  );
}

function NavbarLeft() {
  return (
    <div className=' h-[119px] lg:p-16 flex items-center justify-between align-middle '>
      <span className='logo text-4xl m-[1.5rem] font-extrabold bg-gradient-to-l from-violet-950 to-violet-800 bg-clip-text  text-transparent'>
        STUDINITY
      </span>
    </div>
  );
}
function NavbarRight() {
  return (
    <div className=' hidden h-[119px] lg:flex p-16 flex-row gap-16 items-center justify-between align-middle'>
      <div className='right-part1 flex flex-row gap-3 text-2xl'>
        <BsCartCheckFill />
        <CgProfile />
        <BsSearch />
      </div>
      <div className='login-signup-part flex flex-row gap-4 items-center justify-between align-middle'>
        <span className='text-center text-lg align-middle flex underline leading-[35px]'>
          Login
        </span>

        <button
          type='button'
          className='w-[138px] h-[60px] text-lg text-white bg-gradient-to-r from-blue-900 to-violet-500 rounded-[10px] border-2'
        >
          SignUp
        </button>
      </div>
    </div>
  );
}

export default navbar;
