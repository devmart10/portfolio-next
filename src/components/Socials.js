import React from "react";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import data from "../data/personal.json";

const Socials = () => {
  return (
    <div className="flex text-2xl">
      <a target="_blank" rel="noopener" href={data.socials.github} className="pr-2 font-normal">
        <FaGithub></FaGithub>
      </a>
      <a target="_blank" rel="noopener" href={data.socials.facebook} className="pr-2 font-normal">
        <FaFacebook></FaFacebook>
      </a>
      <a target="_blank" rel="noopener" href={data.socials.twitter} className="pr-2 font-normal">
        <FaTwitter></FaTwitter>
      </a>
      <a target="_blank" rel="noopener" href={data.socials.linkedin} className="pr-2 font-normal">
        <FaLinkedin></FaLinkedin>
      </a>
    </div>
  );
};

export default Socials;
