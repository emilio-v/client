import React, { useState } from "react";

const NewProject = () => {
  const [project, setProject] = useState({
    name: "",
  });

  const { name } = project;

  const onChangeProject = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <button type="button" className="btn btn-block btn-primario">
        New Project
      </button>
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
    </>
  );
};

export default NewProject;
