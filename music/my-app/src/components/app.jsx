import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import PrivateRoute from './privateroute';
import Home from "./home";
import LoginForm from "./login";
import RegisterForm from "./register";

function App() {
  return (
    <div className="AppRouter">
      <Router>
        <Routes>
            <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/' element={<Home/>}/>
            </Route>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
