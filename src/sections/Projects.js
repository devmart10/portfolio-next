import React from "react";
import DetailsSection from "../components/detailsSection";

import data from "../data/projects.json";

const Projects = () => {
  return (
    <section className="mb-4 bg-white card">
      <a className="block mb-4 text-3xl font-bold text-primary">Here's what I'm working on</a>
      {data.map((project, index) => (
        <DetailsSection
          key={index}
          title={project.name}
          subtitle={project.shortDesc}
          label={project.date}
          body={project.longDesc}
        ></DetailsSection>
      ))}
    </section>
  );
};

export default Projects;
