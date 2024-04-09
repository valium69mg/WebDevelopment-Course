import React from "react";
import './styles/whatermarkStyles.css';

const logo_fill = "white";
const viewbox = "0 0 10 25";

function Watermark(){
    return(
        <div className="watermark">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill={logo_fill} class="bi bi-pci-card" viewBox={viewbox}>
            <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5"/>
            <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5zm4 0h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"/>
        </svg>
            <h1 className="roboto-thin"> Web Portfolio </h1>
        </div>
    )
}

export default Watermark;