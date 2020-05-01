import React, { useState } from "react";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
import { FaBars } from "./Icons";
import { FaGlasses } from "react-icons/fa";

const Links = ({ className }) => (
  <ul className={`flex items-center h-10 font-light tracking-wide ${className}`}>
    <Link href="/projects">
      <a className="">Projects</a>
    </Link>
    <Link href="/about">
      <a className="ml-4 ">About</a>
    </Link>
    <Link href="/contact">
      <a className="ml-4 ">Contact</a>
    </Link>
  </ul>
);

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <header className="mb-4 text-lg text-gray-100 shadow-lg bg-primary">
      <div className="p-2 my-container">
        <div className="flex items-center">
          {/* <button
            className="flex justify-center w-8 h-8 p-1 mr-2 border rounded sm:hidden"
            onClick={() => setDropdown((state) => !state)}
          >
            <FaBars className="fill-current"></FaBars>
          </button> */}
          {/* <FaGlasses className="w-10 h-10 p-2 mr-2 bg-white rounded-full fill-current text-primary"></FaGlasses> */}
          <a className="mr-2 text-2xl font-semibold tracking-wider">Devon Martin</a>

          {/* <Links className="hidden sm:flex"></Links> */}
        </div>
        {/* <CSSTransition in={dropdown} timeout={300} classNames="header-dropdown" unmountOnExit>
          <Links></Links>
        </CSSTransition> */}
      </div>
    </header>
  );
};

export default Header;