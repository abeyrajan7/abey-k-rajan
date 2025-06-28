import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import ankitsHope from "../../assets/Ankit-s-hope.png";
import framefinder from "../../assets/frame-finder.jpg";
import taskManager from "../../assets/task-manager.png";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={"https://github.com/abeyrajan7/sbom-finder"}
          title="Sbom Finder for Devices"
          description="Fetch the sbom"
          tech="Speing-Boot (Java) | React.js | PostgreSQl"
        />

        <ProjectCard
          src={framefinder}
          link={"https://photography-app-5osi.vercel.app/"}
          title="FrameFinder"
          description="Photography application"
          tech="Next.js | Javascript | AWS S3"
        />

        <ProjectCard
          src={ankitsHope}
          link={"https://www.ankitfoundationcorp.org/app"}
          title="Ankit's Hope"
          description="Mental Health Application"
          tech="Next.js | Javascript"
        />

        <ProjectCard
          src={taskManager}
          link={"https://github.com/abeyrajan7/TaskManager"}
          title="Task Manager"
          description="A Task Management application"
          tech="Laravel (PHP) | Next.js (React)"
        />
      </div>
    </section>
  );
}

export default Projects;
