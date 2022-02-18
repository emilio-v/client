import React, { useContext, useEffect } from "react";

import ProjectContext from "../../context/projects/projectContext";

import Project from "./Project";

const ProjectList = () => {
  const projectsContext = useContext(ProjectContext);
  const { projects, getProjects } = projectsContext;

  useEffect(() => {
    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (projects.length === 0) {
    return <p>There are no projects yet, start by creating one.</p>;
  }

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project {...project} key={project.id} />
      ))}
    </ul>
  );
};

export default ProjectList;
