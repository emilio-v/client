import { useReducer } from "react";

import TaskReducer from "./taskReducer";
import TaskContext from "./taskContext";

const TaskState = (props) => {
  const initialState = {
    task: [],
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  return (
    <TaskContext.Provider
      value={{
        task: state.task,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
