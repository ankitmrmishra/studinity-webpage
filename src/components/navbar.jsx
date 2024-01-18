import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { openState } from "../recoil"; //
// import { Link } from "react-scroll";
import Link from '@mui/material/Link';
import { BsCartCheckFill, BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdMenuOpen, MdClose } from "react-icons/md";
import { useRecoilValue } from 'recoil';
import { loggedInUser } from '../recoil';

const navmidItems = ["Home", "About", "Courses", "Shop", "Testimonials"];

function navbar() {
 
  const [open, setOpen] = useRecoilState(openState);

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
        className='text-4xl text-violet-700  rounded-md lg:hidden py-2 border px-4 mx-1 border-white'
      >
        {open ? <MdClose /> : <MdMenuOpen />}
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
          <Link
              className='hover:cursor-pointer'
              to={item}
              smooth={true}
              duration={500}
            >
              {item}
            </Link>
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
  const [token, setToken] = React.useState(localStorage.getItem("token") || "");
  const [name, setName] = useState("");
  
  const user = useRecoilValue(loggedInUser);
  
  return (
    <div className='  lg:h-[119px] lg:flex lg:p-16 flex-row gap-16 items-center justify-center align-middle  '>
      <div className='right-part1 flex flex-row justify-center items-center gap-3 text-2xl'>
        <BsCartCheckFill />
        <CgProfile />
        <BsSearch />
      </div>
      <div className='login-signup-part flex flex-row gap-8 lg:p-0 pt-8 pb-5  items-center justify-center lg:gap-4  lg:justify-between align-middle'>
         {user ? (
        <span className="text-2xl bg-gray-100 rounded-md p-3">{user.username}</span>
      ) : (
        <div className="login-signup-part flex flex-row gap-8 lg:p-0 pt-8 pb-5  items-center justify-center lg:gap-4  lg:justify-between align-middle"><Link
          
          className='hover:cursor-pointer'
             href="login"
             
        >
        <span className='text-center text-lg align-middle flex underline leading-[35px]'>
          Login
        </span>
        </Link>
        <Link className='hover:cursor-pointer'
             href="signup">
        <button
          type='button'
          className='w-[138px] h-[60px] text-lg text-white bg-gradient-to-r from-blue-900 to-violet-500 rounded-[10px] border-2'
        >
          SignUp
          </button>
          </Link>
</div>
      )}
              </div>
    </div>
  );
}

export default navbar;
