import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-full text-gray-800 bg-white">
      <header>
        <Header></Header>
      </header>
      <main className="flex flex-col p-2 my-container">{children}</main>
      <footer className="mt-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
