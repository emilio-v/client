import React from "react";

const NewProject = () => {
  return (
    <>
      <button type="button" className="btn btn-block btn-primario">
        New Project
      </button>
      <form className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Project Name"
          name="name"
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
