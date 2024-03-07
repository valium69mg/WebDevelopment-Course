import React from "react";
import Navibar from "./navbar";
import {motion} from "framer-motion";
import img_portfolio from "./img/project-img/portfolio.png"
import img_passwordmanager from "./img/project-img/logo.png"
import img_dummy from "./img/dummy.jpg"

const animations = {
    initial: {opacity:0,y:0},
    animate: {opacity:1,y:0},
    exit: {opacity:0,y:-100}
};

const projects = [
    {
        "title":"Password Manager",
        "body":"A password manager desktop app, where the program saves the user's passwords through AES Encryption for managing ,editing and retrieving passwords.  ",
        "img":img_passwordmanager,
        "language":"Python"
    },
    {
        "title": "Portfolio Website",
        "body": "Portfolio webpage made with react and bootstrap. The website contains animated icons and loading pages displaying a react skills.  ",
        "img":img_portfolio,
        "language":"React"
    },
    {
        "title":"Lorem Ipsum",
        "body":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        "img":img_dummy,
        "language":"Latin"
    },
    {
        "title":"Lorem Ipsum",
        "body":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        "img":img_dummy,
        "language":"Latin"
    },
    {
        "title":"Lorem Ipsum",
        "body":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        "img":img_dummy,
        "language":"Latin"
    },
    {
        "title":"Lorem Ipsum",
        "body":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        "img":img_dummy,
        "language":"Latin"
    },
    {
        "title":"Lorem Ipsum",
        "body":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        "img":img_dummy,
        "language":"Latin"
    },
    {
        "title":"Lorem Ipsum",
        "body":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        "img":img_dummy,
        "language":"Latin"
    }
]




function ProjectCard(props) {
  return (
    <div className="projectCard">
        <img src={props.img} alt={props.alt}></img>
        <h2> {props.title} </h2>
        <p> {props.body} </p>
        <p className="languageParagraph"> {props.language}</p>
    </div>
  );
}



function Projects() {
    return (
        <div className="projectsContainer App">
            <Navibar/>
            <motion.div 
            className="cardsContainer"
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration:1}}
            >   
                {projects.map(project => {
                    return (
                      <ProjectCard
                        id={projects.indexOf(project)}
                        img={project["img"]}
                        alt={"img" + projects.indexOf(project).toString()}
                        title={project["title"]}
                        body={project["body"]}
                        language={project["language"]}
                      />  
                    );
                })}

            </motion.div>
        </div>
       
    )
}

export default Projects;
