import React from "react";
// TODO import FA user icon

const AboutMe = () => {
  return (
    <section id="about-me" className="wow fadeInUp">
      <div className="mb-4 bg-white card">
        <h2 className="font-bold text-primary">About Me</h2>
        <h4>Hello, and welcome!</h4>
        <p>
          Hi, I'm Devon Martin and I'm a software developer from San Jose, CA. I currently work for Chevron as a
          Software Engineer, but enjoying doing freelance web development for private clients on the side. I created
          this website to showcase the things I can do and plan to do.
        </p>
        <p>
          I first got into programming because computers have always fascinated me. I started my journey making tiny toy
          apps in Python while in high school. Unfortuantely, my school did not offer any computer science courses, so I
          taught myself the basics of programming trough online material. I then went to Cal Poly, San Luis Obispo where
          I had an awesome time getting my Bachelor's Degree in Software Engineering. Since then, I've been working at
          Chevron on everything from in-house .NET applications, to Azure cloud migrations, and now I am starting a new
          role working with Python to contirubute to Data Science and Machine Learning project.
        </p>
        <p>
          This website serves as an all-in-one place to get a sense of who I am and where I'm heading. If you like what
          you see, navigate to the contact section below and send me an email. I would love to hear from you!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
