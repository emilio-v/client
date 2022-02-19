import React, { useContext } from "react";

import TaskContext from "../../context/tasks/taskContext";

const Task = ({ name, state, id, projectId }) => {
  const { deleteTask, getProjectTasks } = useContext(TaskContext);

  return (
    <li className="tarea sombra">
      <p>{name}</p>
      <div className="estado">
        {state ? (
          <button type="button" className="completo">
            Complete
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incomplete
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => {
            deleteTask(id);
            getProjectTasks(projectId);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
