import React from 'react'

const DetailsSection = ({ title, label, subtitle, body }) => {
  return (
    <section className="mb-8 relative">
      <div className="flex flex-col md:flex-row md:items-baseline mb-2 ">
        <a href="#" className="font-bold underline">{title}</a>
        <span className="italic md:ml-2">{subtitle}</span>
        <span className="text-gray-700 text-sm md:ml-auto">{label}</span>
      </div>
      <p className="py-2">{body}</p>
    </section>
  );
};

export default DetailsSection
