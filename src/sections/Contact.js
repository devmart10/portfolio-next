import React from "react";

import data from "../data/personal.json";

const Contact = () => {
  return (
    <section className="mb-4 bg-white card">
      <a className="block mb-4 text-3xl font-bold text-primary">Contact</a>
      <p className="mb-1">{data.full_name}</p>
      <p className="mb-1">{data.email}</p>
      <p className="mb-1">{data.location}</p>
      <hr className="my-4" />
      <p className="mb-1">{data.socials.github}</p>
      <p className="mb-1">{data.socials.twitter}</p>
      <p className="mb-1">{data.socials.linkedin}</p>
    </section>
  );
};

export default Contact;
