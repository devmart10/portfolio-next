import React from "react";
import Layout from "../src/components/layout";
import Card from "../src/components/card";
import DetailsSection from "../src/components/detailsSection";

const projects = [
  {
    name: "BugTracker",
    date: "Jan 2020 - Present",
    shortDesc: "Simple issue tracking with authentication",
    longDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error \
        cumque possimus asperiores, at qui necessitatibus voluptatem sed ad \
        libero cupiditate magni atque autem, enim quia amet expedita. Itaque \
        autem explicabo quod fuga soluta! Labore eveniet enim et doloremque \
        officiis laborum rerum explicabo atque iusto, consequuntur quo \
        provident, praesentium quos?",
  },
  {
    name: "Todoist Clone",
    date: "Oct. 2019 - Present",
    shortDesc: "Recreate the impressive functionality of Todoist",
    longDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error \
        cumque possimus asperiores, at qui necessitatibus voluptatem sed ad \
        libero cupiditate magni atque autem, enim quia amet expedita. Itaque \
        autem explicabo quod fuga soluta! Labore eveniet enim et doloremque \
        officiis laborum rerum explicabo atque iusto, consequuntur quo \
        provident, praesentium quos?",
  },
];

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
