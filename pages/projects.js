import React from "react";
import Layout from "../src/components/layout";
import Card from "../src/components/card";
import DetailsSection from "../src/components/detailsSection";

import { projects } from "../src/data/projects.json";

const Projects = () => {
  return (
    <Layout>
      <Card title="Here's what I'm working on" href="">
        {projects.map((project, index) => (
          <DetailsSection
            key={index}
            title={project.name}
            subtitle={project.shortDesc}
            label={project.date}
            body={project.longDesc}
          ></DetailsSection>
        ))}
      </Card>
    </Layout>
  );
};

export default Projects;
