import React from "react";
import Project from "../components/Project";

const projects = [
  { title: "Project 1", image: "image1.jpg", deployedUrl: "#", repoUrl: "#" },
  { title: "Project 2", image: "image2.jpg", deployedUrl: "#", repoUrl: "#" },
  // Add more projects
];

const Portfolio = () => {
  return (
    <section>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
