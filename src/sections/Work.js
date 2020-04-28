import React from "react";
import DetailsSection from "../components/detailsSection";

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
      {data.map((job, index) => (
        <DetailsSection
          key={index}
          title={job.name}
          subtitle={job.shortDesc}
          label={job.date}
          body={job.longDesc}
        ></DetailsSection>
      ))}
    </section>
  );
};

export default Work;
