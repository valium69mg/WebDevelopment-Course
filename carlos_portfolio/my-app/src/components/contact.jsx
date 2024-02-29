import React from "react";
import Navibar from "./navbar";
import {motion} from "framer-motion";

const contactInfo = [
    {
        "title":"Telephone",
        "contact":"+52 442 273 7382",
    },
    {
        "title":"Mail",
        "contact":"carlostranquilino.cr@gmail.com",
    },
    {
        "title":"Github",
        "contact":"https://github.com/valium69mg",
    }
];

const animations = {
    initial: {opacity:0,y:50},
    animate: {opacity:1,y:0},
    exit: {opacity:0,y:-100},
};

function ContactCard(props){
    return (
        <div class="contactCard">
            <h1> {props.title}</h1>
            <p> {props.contact}</p>
      </div>
    )
}

function Contact(){
    return (
        <div className="contactContainer App">
            
            
            <Navibar/>
            <motion.div 
            className="contactCards"
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration:1}}
            >   
                {contactInfo.map((element)=> {
                    return (
                        <ContactCard
                            title={element["title"]}
                            contact={element["contact"]}
                        />
                    );
                })}
            </motion.div> 
        </div>
    )
}

export default Contact;