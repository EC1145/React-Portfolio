import React from "react";

const Project = ({ title, image, deployedUrl, repoUrl }) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        View Code
      </a>
    </div>
  );
};

export default Project;
