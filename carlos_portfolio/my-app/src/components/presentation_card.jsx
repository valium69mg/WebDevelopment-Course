import React from "react";
import image from "./img/carlos.png";

function PresentationCard(){
    return (
        <div className="presentationCard">
            <div className="wrapper">
                <img src={image} alt="carlos"/>
            </div> 
            <div className="presentationCard-paragraph">
                <h1> Hi, I am Carlos.</h1>
                <p> I'm a Mechatronics Engineer, graduated from Tec de Monterrey. I focus my work on Web and App development, using tools as Javascript, Python, Databases, RESTFUL APIs and various frameworks.  </p>
            </div>
            
        </div>
    )
}

export default PresentationCard;