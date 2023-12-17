import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCartCheckFill, BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const navmidItems = ["Home", "About", "Courses", "Shop", "Events"];

function navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className='lg:h-[119px] h-[70px] font-display flex flex-row align-middle justify-between text-center items-center '>
      <NavbarLeft />
      <NavbarMiddle open={open} navmidItems={navmidItems} />
      <button
        type='button'
        onClick={toggleMenu}
        className='text-2xl bg-blue-300 rounded-md lg:hidden py-2 border px-4 mx-1 border-white'
      >
        {open ? "Close" : "Menu"}
      </button>
    </div>
  );
}

function NavbarMiddle({ open, navmidItems }) {
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } lg:h-[119px] lg:flex lg:relative bg-white  text-black  tracking-wider absolute w-full  flex-row items-center justify-between align-middle lg:top-0 top-16`}
    >
      {navmidItems.map((item, index) => (
        <div
          key={index}
          className='list-none m-[2rem] text-lg transform transition-all delay-75'
        >
          <li>{item}</li>
        </div>
      ))}
      <NavbarRight />
    </div>
  );
}

function NavbarLeft() {
  return (
    <div className='h-[119px] lg:p-16 flex items-center justify-between align-middle '>
      <span className='logo text-4xl m-[1.5rem] font-extrabold bg-gradient-to-l from-violet-950 to-violet-800 bg-clip-text text-transparent'>
        STUDINITY
      </span>
    </div>
  );
}

function NavbarRight() {
  return (
    <div className='  lg:h-[119px] lg:flex lg:p-16 flex-row gap-16 items-center justify-center align-middle  '>
      <div className='right-part1 flex flex-row justify-center items-center gap-3 text-2xl'>
        <BsCartCheckFill />
        <CgProfile />
        <BsSearch />
      </div>
      <div className='login-signup-part flex flex-row gap-8 lg:p-0 pt-8 pb-5  items-center justify-center lg:gap-4  lg:justify-between align-middle'>
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
