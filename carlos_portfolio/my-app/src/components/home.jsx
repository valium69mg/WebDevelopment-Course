import React from "react";
import Navibar from "./navbar";
import PresentationCard from "./presentation_card";
import Logos from "./logos";

import {motion} from "framer-motion";

const animations = {
    initial: {opacity:0,x:-100},
    animate: {opacity:1,x:0},
    exit: {opacity:0,x:100}
};

const AnimatedHome = () => {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration:2}}
        >
            <PresentationCard/>
            <Logos/>
        </motion.div>
    );
};


function Home(){
    return (
        <div className="App">  
            <Navibar/>
            <AnimatedHome/>
        </div>
    );
};

export default Home;