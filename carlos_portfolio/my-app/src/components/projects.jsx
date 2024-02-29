import React from "react";
import Navibar from "./navbar";
import {motion} from "framer-motion";
import img_portfolio from "./img/project-img/portfolio.png"
import img_passwordmanager from "./img/project-img/logo.png"
import img_dummy from "./img/dummy.jpg"

const animations = {
    initial: {opacity:0,y:50},
    animate: {opacity:1,y:0},
    exit: {opacity:0,y:-100},
};

const projects = [
    {
        "title":"Password Manager",
        "body":"A password manager desktop app, where the program saves the user's passwords through AES Encryption. The program has a intuitive interface to help the user saving, editing and viewing registered passwords",
        "img":img_passwordmanager,
        "language":"Python"
    },
    {
        "title": "Portfolio Website",
        "body": "Portfolio webpage made with react and bootstrap. The website contains animated icons and loading pages displaying a react skills. Also web design concepts where used, such as: color palettes, typography and UX design. ",
        "img":img_portfolio,
        "language":"React"
    },
    {
        "title":"Lorem Ipsum",
        "body":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "img":img_dummy,
        "language":"Latin"
    },
    {
        "title":"Lorem Ipsum",
        "body":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "img":img_dummy,
        "language":"Latin"
    }
]


function ProjectCard(props){
    return (
        <div class="col">
            <div class="card shadow-sm">
                <img className="cardImg" src={props.img}  alt="dummy"></img>
                <div class="card-body">
                <h1 className="roboto-thin projecttitlecard"> {props.title} </h1>
                <p class="roboto-thin">{props.body}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="roboto-thin language">{props.language}</p>
                </div>
                </div>
            </div>
            </div>
    );
};

function Projects() {
    return (
        <div className="projectsContainer App">
            <Navibar/>
            <h1> Projects</h1>
            <motion.div 
            className="cardsContainer"
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration:1}}
            >   
                {projects.map((element) => {
                    return (
                        <ProjectCard
                        title={element["title"]}
                        body={element["body"]}
                        img={element["img"]}
                        language={element["language"]}
                        />
                    )
                })}
                
            </motion.div>
        </div>
       
    )
}

export default Projects;
