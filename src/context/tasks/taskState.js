import { useReducer } from "react";

import TaskReducer from "./taskReducer";
import TaskContext from "./taskContext";

import { PROJECT_TASKS } from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { projectId: 1, name: "Create Project", state: true },
      { projectId: 2, name: "Set up", state: true },
      { projectId: 3, name: "Choose Colors", state: false },
      { projectId: 1, name: "Import Images", state: false },
    ],
    projectTasks: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const getProjectTasks = (projectId) => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        projectTasks: state.projectTasks,
        getProjectTasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
