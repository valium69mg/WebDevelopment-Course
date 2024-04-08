import React from "react";
import image from "./img/carlos.png";
import './styles/presentationCardStyles.css';

function PresentationCard(){
    return (
        <div className="presentationCard">
            <div className="wrapper">
                <img src={image} alt="carlos"/>
            </div> 
            <div className="presentationCard-paragraph">
                <h1> Hi, I am Carlos.</h1>
                <p> I'm a Engineer, graduated from Tec de Monterrey. I focus my work on Web and App development, using various languages and frameworks.  </p>
                <a href="/Projects"> See my work </a>
            </div>
        </div>
    )
}

export default PresentationCard;