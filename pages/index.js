import React from "react";
import Layout from "../src/components/Layout";

import AboutMe from "../src/sections/AboutMe";
import Projects from "../src/sections/Projects";
import Contact from "../src/sections/Contact";
import Work from "../src/sections/Work";

const Index = () => {
  return (
    <Layout>
      <AboutMe></AboutMe>
      <Work></Work>
      <Projects></Projects>
      <Contact></Contact>
    </Layout>
  );
};

export default Index;
