import React from "react";
import data from "../data/projects.json";

const Projects = () => {
  return (
    <section className="mb-4 bg-white card">
      <a className="block mb-4 text-3xl font-bold text-primary">Here's what I'm working on</a>
      {data.map(({ name, date, shortDesc, longDesc }, index) => {
        return (
          <section className="relative mb-8" key={index}>
            <div className="flex flex-col mb-2 md:flex-row md:items-baseline ">
              <a href="#" className="font-bold underline">
                {name}
              </a>
              <span className="italic md:ml-2">{shortDesc}</span>
              <span className="text-sm text-gray-700 md:ml-auto">{date}</span>
            </div>
            <p className="py-2">{longDesc}</p>
          </section>
        );
      })}
    </section>
  );
};

export default Projects;
