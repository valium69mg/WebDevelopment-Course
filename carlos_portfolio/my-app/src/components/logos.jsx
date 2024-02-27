import React from "react";
import img_python from "./img/python-logo.png";
import img_css from "./img/css-logo.png";
import img_html from "./img/html-logo.png";
import img_js from "./img/js-logo.png";
import img_sql from "./img/sql-logo.png";
import img_react from "./img/react-logo.png";

function Logos(){
    return (
        <div className="logos">
            <h1> {"<Skills>"}</h1>
            <img src={img_react} alt="react"/>
            <img src={img_python} alt="python"/>
            <img src={img_js} alt="javascript"/>
            <img src={img_sql} alt="sql"/>
            <img src={img_html} alt="html"/>
            <img src={img_css} alt="css"/>
        </div>
    )
}

export default Logos;