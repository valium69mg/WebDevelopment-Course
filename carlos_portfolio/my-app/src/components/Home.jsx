import React from "react";
import Navibar from "./Navbar";
import PresentationCard from "./PresentationCard";
import Logos from "./Logos";
import './styles/homeStyles.css';

import {motion} from "framer-motion";

const animations = {
    initial: {opacity:0,y:0},
    animate: {opacity:1,y:0},
    exit: {opacity:0,y:-100}
};

const AnimatedHome = () => {
    return (
        <motion.div
            class="homeContainer"
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration:1}}
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