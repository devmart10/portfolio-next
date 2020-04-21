import React from "react";
import Layout from "../src/components/layout";
import Card from "../src/components/card";
import DetailsSection from "../src/components/detailsSection";

const experiences = [
  {
    name: "Chevron",
    date: "January 2019 - Present",
    shortDesc: "Software Engineer",
    longDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error \
        cumque possimus asperiores, at qui necessitatibus voluptatem sed ad \
        libero cupiditate magni atque autem, enim quia amet expedita. Itaque \
        autem explicabo quod fuga soluta! Labore eveniet enim et doloremque \
        officiis laborum rerum explicabo atque iusto, consequuntur quo \
        provident, praesentium quos?",
  },
  {
    name: "Restoration Robotics",
    date: "June 2018 - Sept. 2018",
    shortDesc: "Software Engineer - Intern",
    longDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe error \
        cumque possimus asperiores, at qui necessitatibus voluptatem sed ad \
        libero cupiditate magni atque autem, enim quia amet expedita. Itaque \
        autem explicabo quod fuga soluta! Labore eveniet enim et doloremque \
        officiis laborum rerum explicabo atque iusto, consequuntur quo \
        provident, praesentium quos?",
  },
];

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
        {experiences.map((exp, index) => (
          <DetailsSection
            key={index}
            title={exp.name}
            subtitle={exp.shortDesc}
            label={exp.date}
            body={exp.longDesc}
          ></DetailsSection>
        ))}
      </Card>
    </Layout>
  );
};

export default About;
