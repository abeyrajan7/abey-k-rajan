import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import Hipsterr from "../../assets/hipsster.png";

import freshBurger from "../../assets/fresh-burger.png";
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
        />

        <ProjectCard
          src={freshBurger}
          link={"https://photography-app-5osi.vercel.app/about"}
          title="FrameFinder"
          description="Photography application"
        />

        <ProjectCard
          src={Hipsterr}
          link={"https://www.ankitfoundationcorp.org/app"}
          title="Ankit's Hope"
          description="Mental Health Application"
        />
      </div>
    </section>
  );
}

export default Projects;
