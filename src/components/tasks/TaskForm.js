import React, { useContext, useState } from "react";

import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const TaskForm = () => {
  const { currentProject } = useContext(ProjectContext);
  const { getProjectTasks, taskError, addTask, validateTask } =
    useContext(TaskContext);
  const [task, setTask] = useState({
    projectId: "",
    name: "",
    state: false,
  });

  if (!currentProject) return null;

  const [project] = currentProject;
  const { projectId, name } = task;

  const onChange = (e) => {
    setTask({
      ...task,
      projectId: project.id,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!projectId || name === "" || !name) {
      validateTask();
      return;
    }

    addTask(task);
    getProjectTasks(project.id);
    setTask({
      projectId: "",
      name: "",
      state: false,
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Taks name..."
            name="name"
            onChange={onChange}
            value={name}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Add Task"
          />
        </div>
      </form>
      {taskError && <p className="mensaje error">The Task is required</p>}
    </div>
  );
};

export default TaskForm;
