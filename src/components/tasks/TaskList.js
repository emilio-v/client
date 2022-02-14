import React from "react";

import Task from "./Task";

const TaskList = () => {
  const tasks = [
    { name: "Create Project", state: true },
    { name: "Set up", state: true },
    { name: "Choose Colors", state: false },
    { name: "Import Images", state: false },
  ];

  return (
    <>
      <h2>Project: JAVA</h2>
      <ul className="listado-tarea">
        {tasks.length === 0 ? (
          <li className="tarea">There are no tasks</li>
        ) : (
          tasks.map((t) => (
            <Task
              key={`${t.name}-${Math.random()}`}
              name={t.name}
              state={t.state}
            />
          ))
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Delete Project &times;
      </button>
    </>
  );
};

export default TaskList;
