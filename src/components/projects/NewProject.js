import React, { useContext, useState } from "react";
import ProjectContext from "../../context/projects/projectContext";

const NewProject = () => {
  // Get form state
  const projectsContext = useContext(ProjectContext);
  const { form, displayForm, addNewProject } = projectsContext;

  const [project, setProject] = useState({
    name: "",
    id: "",
  });

  const { name } = project;

  const onChangeProject = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || !name) {
      return;
    }
    addNewProject(project);

    setProject({
      name: "",
      id: "",
    });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={displayForm}
      >
        New Project
      </button>
      {form && (
        <form onSubmit={onSubmit} className="formulario-nuevo-proyecto">
          <input
            type="text"
            className="input-text"
            placeholder="Project Name"
            name="name"
            onChange={onChangeProject}
            value={name}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Add Project"
          />
        </form>
      )}
    </>
  );
};

export default NewProject;
