import React from "react";
import Layout from "../src/components/layout";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Card from "../src/components/card";

const Single = () => {
  return (
    <Layout>
      <Card title="About Me" href="/about"></Card>
      <About></About>
      <Card title="Projects" href="/projects">
        <p>My latest project is called Schoolhub, check it out!</p>
      </Card>
      <Projects></Projects>
      <Card title="Contact" href="/contact">
        Contact me via email{" "}
        <a href="mailto:devmart10@gmail.com" className="underline">
          devmart10@gmail.com
        </a>
      </Card>
      <Contact></Contact>
    </Layout>
  );
};

export default Single;
