import React from "react";
import Navibar from "./navbar";
import img_dummy from "./img/dummy.jpg";

import {motion} from "framer-motion";

const animations = {
    initial: {opacity:0,x:100},
    animate: {opacity:1,x:0},
    exit: {opacity:0,x:-100}
};


function AnimatedResume(){
    return (
        <motion.div
            className="resume"
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration:2}}
        >
            <div className="resumeCard">
                <div className="wrapperResume"> <img src={img_dummy} alt="dummy"/></div>
                <h1> Curriculum Vitae </h1>
                <button> Download</button>
        </div>
        </motion.div>
    );
}
;
function Resume(){
    return (
        <div className="resumeContainer App">
            <Navibar/>
            <AnimatedResume/>
        </div>
    );
};

export default Resume;