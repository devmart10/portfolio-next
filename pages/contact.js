import React from "react";
import Layout from "../src/components/layout";
import Card from "../src/components/card";

import data from "../src/data/personal.json";

const Contact = () => {
  return (
    <Layout>
      <Card title="Contact" href="">
        <p className="mb-1">{data.full_name}</p>
        <p className="mb-1">{data.email}</p>
        <p className="mb-1">{data.location}</p>
        <hr className="my-4" />
        <p className="mb-1">{data.socials.github}</p>
        <p className="mb-1">{data.socials.twitter}</p>
        <p className="mb-1">{data.socials.linkedin}</p>
      </Card>
    </Layout>
  );
};

export default Contact;
