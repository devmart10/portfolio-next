import React from "react";
import data from "../data/education.json";

const Education = () => {
  return (
    <section id="education" className="wow fadeInUp">
      <div className="mb-4 bg-white card">
        <h2 className="font-bold text-primary">Education</h2>
        {data.map(({ name, date, degree, img }, index) => {
          return (
            <div className="mt-4" key={index}>
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex items-end mb-2">
                  <img src={img} alt={name} className="w-8 h-8 mr-2 rounded-full" />
                  <h4 className="m-0 font-semibold">{name}</h4>
                </div>
                <span className="text-sm text-gray-700 md:ml-auto">{date}</span>
              </div>
              <p className="pb-8 text-sm text-gray-700">{degree}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
