import React, { useContext } from "react";

import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

import Task from "./Task";

const TaskList = () => {
  const { currentProject, deleteProject } = useContext(ProjectContext);
  const { projectTasks } = useContext(TaskContext);

  if (!currentProject) return <h2>Select a Project</h2>;

  const [project] = currentProject;

  return (
    <>
      <h2>Project: {project.name}</h2>
      <ul className="listado-tarea">
        {projectTasks.length === 0 ? (
          <li className="tarea" style={{ padding: "1.5rem" }}>
            There are no tasks
          </li>
        ) : (
          projectTasks.map((t) => (
            <Task key={`${t.name}-${Math.random()}`} {...t} />
          ))
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => deleteProject(project.id)}
      >
        Delete Project &times;
      </button>
    </>
  );
};

export default TaskList;
