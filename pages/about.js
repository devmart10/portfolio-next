import React from "react";
import Layout from "../src/components/layout";
import Card from "../src/components/card";
import DetailsSection from "../src/components/detailsSection";

import data from "../src/data/work.json";

const About = () => {
  return (
    <Layout>
      <Card title="Resume" href="">
        <h1 className="mb-4 text-xl">Summary of Qualifications</h1>
        <p className="mb-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet dolore quaerat error dolorum consectetur,
          iure dolor amet provident eligendi quo.
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
    </Layout>
  );
};

export default About;
