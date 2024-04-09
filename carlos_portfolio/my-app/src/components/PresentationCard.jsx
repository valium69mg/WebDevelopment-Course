import React from "react";
import image from "./img/carlos.png";
import './styles/presentationCardStyles.css';
import Logos from "./Logos";


function PresentationCard(){
    return (
        <div className="presentationCard">
        <div className="wrapper">
                <img src={image} alt="carlos"/>
            </div>     
        <div className="presentationCard-paragraph">
                <h1> Hi, I am Carlos.</h1>
                <p> I'm a Engineer, graduated from Tec de Monterrey. I focus my work on Web and App development, using various languages and frameworks.  </p>
                <div className="homeButtons">
                    <a id="button1" href="/Projects"> my work </a>
                    <a id="button2" href="/Resume"> my resume </a>
                </div>
                <Logos/>
            </div>
              
        </div>
    )
}

export default PresentationCard;