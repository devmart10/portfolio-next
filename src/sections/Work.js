import React from "react";
import Card from "../components/card";
import DetailsSection from "../components/detailsSection";

import data from "../data/work.json";

const Work = () => {
  return (
    <Card title="Resume" href="">
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
    </Card>
  );
};

export default Work;
