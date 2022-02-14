import React from "react";

import SideBar from "../layout/SideBar";

const Proyects = () => {
  return (
    <div className="contenedor-app">
      <SideBar />
      <div className="seccion-principal">
        <main>
          <div className="contenedor-tareas"></div>
        </main>
      </div>
    </div>
  );
};

export default Proyects;
