import React from "react";
import Navibar from "./Navbar";
import img_cv from "./img/cv.jpg"

import {motion} from "framer-motion";
import './styles/resumeStyles.css';

const animations = {
    initial: {opacity:0,y:0},
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
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="white" class="bi bi-file-earmark-person" viewBox="0 0 16 16">
            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z"/>
            </svg>
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