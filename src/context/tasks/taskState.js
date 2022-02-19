import { useReducer } from "react";
import { v4 } from "uuid";

import TaskReducer from "./taskReducer";
import TaskContext from "./taskContext";

import {
  PROJECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
} from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { projectId: 1, id: 1, name: "Create Project", state: true },
      { projectId: 2, id: 2, name: "Set up", state: true },
      { projectId: 3, id: 3, name: "Choose Colors", state: false },
      { projectId: 1, id: 4, name: "Import Images", state: false },
    ],
    projectTasks: null,
    taskError: false,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const getProjectTasks = (projectId) => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId,
    });
  };

  const addTask = (task) => {
    task.id = v4();
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };

  const deleteTask = (taskId) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        projectTasks: state.projectTasks,
        taskError: state.taskError,
        getProjectTasks,
        addTask,
        validateTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
