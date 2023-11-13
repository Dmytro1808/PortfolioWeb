import "./Projects.css";
import ItemProject from "../../components/ItemProject/ItemProject";
import { projects } from "../../helpers/ItemProjectList";

function Projects() {
  return (
    <>
      <main className="section_project">
        <div className="container_project">
          {projects.map((project) => {
            return (
              <ItemProject
                key={project.id}
                title={project.title}
                img={project.img}
                gitHubLink={project.gitHubLink}
                siteLink={project.siteLink}
                skills={project.skills}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Projects;
