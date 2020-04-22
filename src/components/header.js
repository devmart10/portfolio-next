import React, { useState } from "react";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
import { HamburgerIcon } from "./icons";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="mb-4 text-lg text-gray-100 shadow-lg bg-primary">
      <div className="p-2 my-container">
        <div className="flex items-center justify-between">
          <button className="w-8 h-8 p-1 mr-2 border rounded" onClick={() => setDropdown((state) => !state)}>
            <HamburgerIcon className="fill-current"></HamburgerIcon>
          </button>
          <Link href="/">
            <a className="mr-auto text-2xl font-semibold">Devon Martin</a>
          </Link>
        </div>
        <CSSTransition in={dropdown} timeout={300} classNames="header-dropdown" unmountOnExit>
          <ul className="flex items-center h-10 font-light tracking-wide">
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
        </CSSTransition>
      </div>
    </div>
  );
};

export default Header;
