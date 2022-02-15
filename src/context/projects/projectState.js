import React, { useReducer } from "react";

import ProjectContext from "./projectContext";
import ProjectReducer from "./projectReducer";

import { PROJECT_FORM } from "../../types";

const ProjectState = (props) => {
  const initialState = {
    form: false,
    projects: [
      {
        id: 1,
        name: "JAVA",
      },
      {
        id: 2,
        name: "JAVASCRIPT",
      },
      {
        id: 3,
        name: "PHYTON",
      },
    ],
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
    <ProjectContext.Provider
      value={{ form: state.form, projects: state.projects, displayForm }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
