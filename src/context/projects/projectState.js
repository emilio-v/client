import React, { useReducer } from "react";

import ProjectContext from "./projectContext";
import ProjectReducer from "./projectReducer";

import { PROJECT_FORM, GET_PROJECTS } from "../../types";

const ProjectState = (props) => {
  const projects = [
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
  ];

  const initialState = {
    form: false,
    projects: [],
  };

  // Dispatch to execute the actions
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  // functions to CRUD
  const displayForm = () => {
    dispatch({
      type: PROJECT_FORM,
    });
  };

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        displayForm,
        getProjects,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
