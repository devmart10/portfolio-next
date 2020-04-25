import React from "react";
import Layout from "../src/components/layout";
import Card from "../src/components/card";

import data from "../src/data/personal.json";

const Contact = () => {
  const { full_name, email, location, socials } = data;
  const { github, twitter, linkedin } = socials;
  return (
    <Layout>
      <Card title="Contact" href="">
        <p className="mb-1">{full_name}</p>
        <p className="mb-1">{email}</p>
        <p className="mb-1">{location}</p>
        <hr className="my-4" />
        <p className="mb-1">{github}</p>
        <p className="mb-1">{twitter}</p>
        <p className="mb-1">{linkedin}</p>
      </Card>
    </Layout>
  );
};

export default Contact;
