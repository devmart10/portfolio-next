import React from "react";
import Card from "../components/card";
import DetailsSection from "../components/detailsSection";

import data from "../data/projects.json";

const Projects = () => {
  return (
    <Card title="Here's what I'm working on" href="">
      {data.map((project, index) => (
        <DetailsSection
          key={index}
          title={project.name}
          subtitle={project.shortDesc}
          label={project.date}
          body={project.longDesc}
        ></DetailsSection>
      ))}
    </Card>
  );
};

export default Projects;
