import React from "react";

const Separator = ({ title }) => {
  return (
    <div className="flex items-center justify-center mt-8 mb-4">
      <div className="flex-grow h-0 border-b"></div>
      <h1 className="mx-2 text-3xl">{title}</h1>
      <div className="flex-grow h-0 border-b"></div>
    </div>
  );
};

export default Separator;
