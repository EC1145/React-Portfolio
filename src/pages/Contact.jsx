import React from "react";
import myPhoto from "../assets/your-photo.jpg";

const About = () => {
  return (
    <section>
      <img src={myPhoto} alt="Developer" />
      <p>
        Hello, I'm a web developer with a passion for creating dynamic
        applications with appeling CSS.
      </p>
    </section>
  );
};

export default About;
