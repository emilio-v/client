import React from "react";

import Project from "./Project";

const ProjectList = () => {
  const projects = [{ name: "JAVA" }, { name: "JAVASCRIPT" }];
  return (
    <ul className="listado-proyectos">
      <Project />
      {projects.map((project) => (
        <Project name={project.name} key={project.name} />
      ))}
    </ul>
  );
};

export default ProjectList;
