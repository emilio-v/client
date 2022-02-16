import React, { useContext } from "react";

import ProjectContext from "../../context/projects/projectContext";

const Project = ({ name, id }) => {
  const projectsContext = useContext(ProjectContext);
  const { setCurrentProject } = projectsContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => {
          setCurrentProject(id);
        }}
      >
        {name}
      </button>
    </li>
  );
};

export default Project;
