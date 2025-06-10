import React from "react";

function ProjectCard({ src, link, title, description }) {
  return (
    <div>
      <a href={link} target="_blank">
        <img className="hover" src={src} alt="logo" />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default ProjectCard;
