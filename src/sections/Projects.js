import React, { useEffect } from "react";
import data from "../data/projects.json";

const Projects = () => {
  return (
    <section id="projects" className="wow fadeInUp">
      <div className="mb-4 bg-white card">
        <h2 className="font-bold text-primary">Projects</h2>
        {data.map(({ name, date, shortDesc, longDesc, tech_stack }, index) => {
          return (
            <div className="mt-4" key={index}>
              <div className="flex flex-col md:flex-row md:items-baseline ">
                <h4 className="font-semibold">{name}</h4>
                <span className="italic md:ml-2">{shortDesc}</span>
                <span className="pb-2 text-sm text-gray-700 md:ml-auto">{date}</span>
              </div>
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

export default Projects;
