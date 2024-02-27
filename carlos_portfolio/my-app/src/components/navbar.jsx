import React from "react";
import Watermark from "./whatermark";
import {Link} from "react-router-dom";

function Navibar(){
    return (
    <div className="navibar"> 
        <Watermark className="watermark"/>
        <Link to="/"> Home </Link>
        <Link to="/resume"> Resume </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/contact"> Contact </Link>
        
    </div>
    );
}

export default Navibar;