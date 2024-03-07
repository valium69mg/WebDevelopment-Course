import React from "react";

const logo_fill = "#fff";
const viewbox = "0 0 10 25";

function Watermark(){
    return(
        <div className="watermark">
            <svg xmlns="http://www.w3.org/2000/svg" width="4vh" height="4vh" fill={logo_fill} class="bi bi-bounding-box-circles" viewBox={viewbox}>
                <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2m2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2 2 0 0 1 1.437-1.437V3.937A2 2 0 0 1 12.063 2.5H3.937A2 2 0 0 1 2.5 3.937M14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
            </svg>
            <h1 className="roboto-thin"> Carlos Roman </h1>
        </div>
    )
}

export default Watermark;