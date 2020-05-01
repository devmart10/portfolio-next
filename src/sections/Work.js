import React from "react";
import data from "../data/work.json";

const Work = () => {
  return (
    <section id="work">
      <div className="mb-4 bg-white card">
        <h2 className="font-bold text-primary">Resume</h2>

        <h3>Summary of Qualifications</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet dolore quaerat error dolorum consectetur,
          iure dolor amet provident eligendi quo.
        </p>
        <h3 className="mt-4">Work Experience</h3>
        {data.map((job, index) => {
          const { name, date, shortDesc, longDesc } = job;
          return (
            <div className="mt-4" key={index}>
              <div className="flex flex-col md:flex-row md:items-baseline ">
                <h4 className="font-semibold">{name}</h4>
                <span className="italic md:ml-2">{shortDesc}</span>
                <span className="pb-2 text-sm text-gray-700 md:ml-auto">{date}</span>
              </div>
              <p>{longDesc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
