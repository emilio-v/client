import React, { useContext } from "react";

import ProjectContext from "../../context/projects/projectContext";

import Project from "./Project";

const ProjectList = () => {
  const projectsContext = useContext(ProjectContext);
  const { projects } = projectsContext;

  if (projects.lenght === 0) return;

  return (
    <ul className="listado-proyectos">
      <Project />
      {projects.map((project) => (
        <Project name={project.name} key={project.id} />
      ))}
    </ul>
  );
};

export default ProjectList;
