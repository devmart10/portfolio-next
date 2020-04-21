import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="mb-4 text-lg text-gray-100 bg-teal-700">
      <div className="flex flex-wrap items-center p-2 my-container">
        <Link href="/">
          <a className="mr-auto font-bold">Devon Martin</a>
        </Link>
        <ul className="flex">
          <Link href="/projects">
            <a className="">Projects</a>
          </Link>
          <Link href="/about">
            <a className="ml-4">About</a>
          </Link>
          <Link href="/contact">
            <a className="ml-4">Contact</a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
