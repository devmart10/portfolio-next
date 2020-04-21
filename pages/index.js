import React from "react";
import Card from "../src/components/card";
import Layout from "../src/components/layout";

const Index = () => {
  return (
    <Layout>
      <Card title="About Me" href="/about"></Card>
      <Card title="Projects" href="/projects">
        <p>My latest project is called Schoolhub, check it out!</p>
      </Card>
      <Card title="Contact" href="/contact">
        Contact me via email{" "}
        <a href="mailto:devmart10@gmail.com" className="underline">
          devmart10@gmail.com
        </a>
      </Card>
    </Layout>
  );
};

export default Index;
