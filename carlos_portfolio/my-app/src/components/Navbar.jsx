import React from "react";
import Watermark from "./Whatermark";
import {Link} from "react-router-dom";
import './styles/navbarStyles.css';

function Navibar(){
    return (
    <div className="navibar"> 
        <Watermark className="watermark"/>
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/resume"> Resume </Link>
        <Link to="/contact"> Contact </Link>      
    </div>
    );
}

export default Navibar;