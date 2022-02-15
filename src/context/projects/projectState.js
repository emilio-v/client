import React, { useReducer } from "react";

import ProjectContext from "./projectContext";
import ProjectReducer from "./projectReducer";

import { PROJECT_FORM } from "../../types";

const ProjectState = (props) => {
  const initialState = {
    form: false,
  };

  // Dispatch to execute the actions
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  // functions to CRUD
  const displayForm = () => {
    dispatch({
      type: PROJECT_FORM,
    });
  };

  return (
    <ProjectContext.Provider value={{ form: state.form, displayForm }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
