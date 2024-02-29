import React from "react";
import Navibar from "./navbar";
import img_cv from "./img/cv.jpg"

import {motion} from "framer-motion";

const animations = {
    initial: {opacity:0,y:50},
    animate: {opacity:1,y:0},
    exit: {opacity:0,y:-100}
};

function AnimatedResume(){
    return (
        <motion.div
            className="resume"
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration:1}}
        >
            <div className="resumeCard">
                <div className="wrapperResume"> <img src={img_cv} alt="cv"/></div>
                <h1> Curriculum Vitae </h1>
                <a href="CV_CarlosRoman.pdf" download>Download</a>
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