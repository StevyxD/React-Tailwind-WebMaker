import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import About from "./Nav/About";
import Company from "./Nav/Company";
import Home from "./Nav/Home";
import Resources from "./Nav/Resources";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    //mx-auto
    // max-w-[2000px]

    <div className="flex h-24 mx-auto max-w-[1240px]  px-4 text-white items-center justify-between">
      <Link
        to="/"
        className="cursor-pointer hover:scale-105 duration-300 hover:text-green-300 w-full text-3xl font-bold text-[#00df9a]"
      >
        React.
      </Link>
      <ul className="flex invisible md:visible">
        <Link
          to="/"
          className="p-4 hover:scale-105 duration-300 hover:text-gray-100"
        >
          Home
        </Link>
        <Link
          to="/company"
          className="p-4 hover:scale-105 duration-300 hover:text-gray-100"
        >
          Company
        </Link>
        <Link
          to="/resources"
          className="p-4 hover:scale-105 duration-300 hover:text-gray-100"
        >
          Resources
        </Link>
        <Link
          to="/about"
          className="p-4 hover:scale-105 duration-300 hover:text-gray-100"
        >
          About
        </Link>
        <Link
          to="/webLog"
          className="p-4 hover:scale-105 duration-300 hover:text-gray-100"
        >
          Webs
        </Link>
      </ul>
      <div onClick={handleNav} className="md:hidden">
        {nav ? (
          <AiOutlineClose size={20} className="cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} className="cursor-pointer" />
        )}
      </div>
      {nav && (
        <div className=" md:hidden fixed left-0 top-0 h-full w-[60%] border-r-gray-800 bg-black">
          <h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">
            React.
          </h1>

          <ul className="p-4  uppercase flex flex-col justify-between items-center">
            <Link
              to="/"
              className="p-4 border-b border-gray-600 hover:scale-105 duration-300 hover:text-gray-100"
            >
              Home
            </Link>
            <Link
              to="/company"
              className="p-4 border-b border-gray-600 hover:scale-105 duration-300 hover:text-gray-100"
            >
              Company
            </Link>
            <Link
              to="/resources"
              className="p-4 border-b border-gray-600 hover:scale-105 duration-300 hover:text-gray-100"
            >
              Resources
            </Link>
            <Link
              to="/about"
              className="p-4 border-b border-gray-600 hover:scale-105 duration-300 hover:text-gray-100"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="p-4 border-b border-gray-600 hover:scale-105 duration-300 hover:text-gray-100"
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
