import React from "react";
import Watermark from "./whatermark";

function Navibar(){
    return (
    <div className="navibar"> 
        <Watermark className="watermark"/>
        <h1 className="roboto-thin"> Resume </h1>
        <h1 className="roboto-thin"> Projects</h1>
        <h1 className="roboto-thin"> Contact</h1>
        
    </div>
    );
}

export default Navibar;