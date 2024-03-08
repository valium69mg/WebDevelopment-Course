import React from "react";
import { Navigate} from 'react-router-dom'
import Home from "./home";

const isLoggedIn = () => {
    return false;
}

const PrivateRoute = () => {
  
    return (
      isLoggedIn() ? <Home/>: <Navigate to="/login"/>
    );

  }
  
  export default PrivateRoute;