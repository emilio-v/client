import React, { useReducer } from "react";

import ProjectContext from "./projectContext";
import ProjectReducer from "./projectReducer";

const ProjectState = (props) => {
  const initialState = {
    form: false,
  };

  // Dispatch to execute the actions
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  // functions to CRUD

  return (
    <ProjectContext.Provider value={{ form: state.form }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
