import React from "react";

import data from "../data/personal.json";

const Contact = () => {
  return (
    <section id="contact">
      <div className="mb-4 bg-white card">
        <h2 className="font-bold text-primary">Contact</h2>
        <p>{data.full_name}</p>
        <p>{data.email}</p>
        <p>{data.location}</p>
        <hr className="my-4" />
        <p>{data.socials.github}</p>
        <p>{data.socials.twitter}</p>
        <p>{data.socials.linkedin}</p>
      </div>
    </section>
  );
};

export default Contact;
