import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-gray-200">
      <Header></Header>
      <main className="flex flex-col p-2 mb-auto my-container">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
