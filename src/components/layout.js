import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-full text-gray-800 bg-white">
      <header>
        <Header></Header>
      </header>
      <main className="flex flex-col p-2 my-container">{children}</main>
      <footer className="mt-auto">
        <div className="py-1 text-center text-gray-100 bg-indigo-700">&copy; 2020 Devon Martin</div>
      </footer>
    </div>
  );
};

export default Layout;
