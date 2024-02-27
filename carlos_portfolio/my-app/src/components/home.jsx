import React from "react";
import Navibar from "./navbar";
import PresentationCard from "./presentation_card";
import Logos from "./logos";


function Home(){
    return (
        <div className="App">  
            <Navibar/>
            <PresentationCard/>
            <Logos/>
        </div>
    )
}

export default Home;