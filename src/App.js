import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Proyects from "./components/proyects/Proyects";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/new-account" element={<NewAccount />} />
        <Route exact path="/proyects" element={<Proyects />} />
      </Routes>
    </Router>
  );
};

export default App;
