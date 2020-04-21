import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex mb-4 text-gray-100 bg-indigo-700">
      <div className="flex items-baseline p-2 my-container">
        <Link href="/">
          <a className="text-xl font-bold">Devon Martin</a>
        </Link>
        <button className="w-10 h-10 ml-auto border rounded md:hidden">
          <span className="block w-6 h-6 mx-auto border rounded"></span>
        </button>
        <ul className="items-end hidden ml-auto text-lg md:flex">
          <Link href="/projects">
            <a className="ml-2">Projects</a>
          </Link>
          <Link href="/about">
            <a className="ml-2">About</a>
          </Link>
          <Link href="/contact">
            <a className="ml-2">Contact</a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
