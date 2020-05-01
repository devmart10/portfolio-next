import React from "react";
import data from "../data/work.json";

const Work = () => {
  return (
    <section id="work">
      <div className="mb-4 bg-white card">
        <h2 className="font-bold text-primary">Work Experience</h2>
        {data.map((job, index) => {
          const { name, date, shortDesc, longDesc, tech_stack } = job;
          return (
            <div className="mt-4" key={index}>
              <div className="flex flex-col md:flex-row md:items-baseline ">
                <h4 className="font-semibold">{name}</h4>
                <span className="italic md:ml-2">{shortDesc}</span>
                <span className="pb-2 text-sm text-gray-700 md:ml-auto">{date}</span>
              </div>
              <p>{longDesc}</p>
              <div className="flex flex-wrap pb-8">
                {tech_stack.map(item => (
                  <span className="px-2 mb-2 mr-2 text-sm text-gray-600 bg-gray-300 rounded">{item}</span>
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
