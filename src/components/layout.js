import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-white">
      <header>
        <Header></Header>
      </header>
      <main className="flex flex-col p-2 mb-auto my-container">{children}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
