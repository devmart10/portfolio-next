import React from "react";
// TODO import FA user icon

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="mb-4 bg-white card">
        <h2 className="font-bold text-primary">About Me</h2>
        <h4>Hello, and welcome!</h4>
        <p>
          I'm Devon Martin, and I'm a software developer from San Jose, CA. I currently work for Chevron as a software
          engineer, but also do free lance web development for private clients on the side. This website was made to
          showcase all of what I can do and plan to do.
        </p>
        <p>
          I got into development because computers have always fascinated me. I started my journey making tiny toy apps
          in Python while in high school. Unfortuantely, my school did not offer any computer science courses, so I
          taught myself the basics of programming trough online material. I then went to Cal Poly, San Luis Obispo where
          I had an awesome time getting my B.S. in Software Engineering.
        </p>
        <p>
          This website serves as an all-in-one place to get a sense of who I am. If you like what you see, head over to
          the contact section below and send me an email. I would love to hear from you!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
