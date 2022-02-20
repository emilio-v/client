import React, { useContext } from "react";

import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
          <li className="tarea">
            <p>There are no tasks</p>
          </li>
        ) : (
          <TransitionGroup>
            {projectTasks.map((t) => (
              <CSSTransition
                key={`${t.name}-${Math.random()}`}
                timeout={200}
                classNames="tarea"
              >
                <Task {...t} />
              </CSSTransition>
            ))}
          </TransitionGroup>
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
