import React from "react";

import SideBar from "../layout/SideBar";
import Bar from "../layout/Bar";
import TaskForm from "../tasks/TaskForm";

const Projects = () => {
  return (
    <div className="contenedor-app">
      <SideBar />
      <div className="seccion-principal">
        <Bar />
        <main>
          <TaskForm />
          <div className="contenedor-tareas"></div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
