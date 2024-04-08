import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";


function App() {
  return (
    <div className="AppRouter">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
