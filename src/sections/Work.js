import React from "react";
import data from "../data/work.json";

const Work = () => {
  return (
    <section className="mb-4 bg-white card">
      <a className="block mb-4 text-3xl font-bold text-primary">Resume</a>

      <h1 className="mb-4 text-xl">Summary of Qualifications</h1>
      <p className="mb-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet dolore quaerat error dolorum consectetur, iure
        dolor amet provident eligendi quo.
      </p>
      <h1 className="mb-4 text-xl">Work Experience</h1>
      {data.map((job, index) => {
        const { name, date, shortDesc, longDesc } = job;
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

export default Work;
