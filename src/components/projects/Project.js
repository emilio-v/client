import React, { useContext } from "react";

import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const Project = ({ name, id }) => {
  const projectsContext = useContext(ProjectContext);
  const { setCurrentProject } = projectsContext;
  const { getProjectTasks } = useContext(TaskContext);

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => {
          setCurrentProject(id);
          getProjectTasks(id);
        }}
      >
        {name}
      </button>
    </li>
  );
};

export default Project;
