import React from "react";
import data from "../data/work.json";

const Work = () => {
  return (
    <section id="work">
      <div className="mb-4 bg-white card">
        <h2 className="font-bold text-primary">Work Experience</h2>
        {data.map((job, index) => {
          const { name, date, shortDesc, longDesc, tech_stack, img, location } = job;
          return (
            <div className="mt-4" key={index}>
              <div className="flex flex-col md:flex-row md:items-center ">
                <div className="flex items-end mb-2">
                  <img src={img} alt={name} className="w-8 h-8 mr-2 rounded-full" />
                  <h4 className="m-0 font-semibold">{name}</h4>
                </div>
                <span className="italic md:ml-2">{shortDesc}</span>
                <span className="pb-2 text-sm text-gray-700 md:ml-auto">{date}</span>
              </div>
              <p className="text-sm text-gray-700">{location}</p>

              <p>{longDesc}</p>
              <div className="flex flex-wrap pb-8">
                <span className="w-full mb-2 mr-2 text-sm text-gray-700 md:w-auto">Primary Technologies:</span>
                {tech_stack.map(item => (
                  <span className="mb-2 mr-2 tag">{item}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
