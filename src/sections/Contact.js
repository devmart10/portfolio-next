import React from "react";
import Card from "../components/card";

import data from "../data/personal.json";

const Contact = () => {
  return (
    <Card title="Contact" href="">
      <p className="mb-1">{data.full_name}</p>
      <p className="mb-1">{data.email}</p>
      <p className="mb-1">{data.location}</p>
      <hr className="my-4" />
      <p className="mb-1">{data.socials.github}</p>
      <p className="mb-1">{data.socials.twitter}</p>
      <p className="mb-1">{data.socials.linkedin}</p>
    </Card>
  );
};

export default Contact;
