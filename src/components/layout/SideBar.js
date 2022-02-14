import React from "react";

import NewProject from "../projects/NewProject";
import ProjectList from "../projects/ProjectList";

const SideBar = () => {
  return (
    <aside>
      <h1>
        MERN<span>TASKS</span>
      </h1>
      <NewProject />
      <div className="proyectos">
        <h2>Your Proyects</h2>
        <ProjectList />
      </div>
    </aside>
  );
};

export default SideBar;
