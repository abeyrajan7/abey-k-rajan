import React from "react";

function ProjectCard({ src, link, title, description }) {
  const styles = {
    link: {
      width: "fit-content",
      textDecoration: "none",
      color: "#222",
      transition: "transform 200ms ease-in-out",
      display: "inline-block",
    },
    linkHover: {
      transform: "scale(1.05)",
    },
    image: {
      maxWidth: "250px",
      borderRadius: "20px",
      backgroundColor: "var(--project-card-bg)",
      display: "block",
      margin: "0 auto",
    },
  };
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
      >
        <img className="hover" src={src} alt="logo" />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default ProjectCard;
