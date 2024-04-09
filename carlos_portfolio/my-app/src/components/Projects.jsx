import React from "react";
import Navibar from "./Navbar";
import {motion} from "framer-motion";
import img_portfolio from "./img/project-img/portfolio-web.jpg";
import img_passwordmanager from "./img/project-img/logo.png"
import img_infinites_scroll from "./img/project-img/infinite-scroll.png";
import img_top_news from "./img/project-img/top-news.png";
import img_contact_book from './img/project-img/contact-book.jpg';
import img_dummy from "./img/dummy.jpg"
import './styles/projectsStyles.css';

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
        "language1":"OOP",
        "language2":"Python",
        "language3":"UI Design",
    },
    {
        "title": "Portfolio Website",
        "body": "Personal portfolio webpage made with react and bootstrap. The website contains animated icons and smooth transitions to make the best UI experience.",
        "img":img_portfolio,
        "language1":"React",
        "language2":"Bootstrap",
        "language3":"CSS Animations",
    },
    {
        "title": "Infinite Scroll",
        "body": "React aplication made to display random bible verses, when hitting the bottom of the page renders new content.",
        "img":img_infinites_scroll,
        "language1":"React",
        "language2":"Bootstrap",
        "language3":"APIs",
    },
    {
        "title": "Contact Book",
        "body": "Application made using flask as a backend and react as a front end, it is a contact book where the user can save,edit or delete contacts.",
        "img":img_contact_book,
        "language1":"React",
        "language2":"Flask",
        "language3":"MongoDB",
    },
    {
        "title": "Top News",
        "body": "Web page that renders the most important news of the day using the NewsAPI, it is beautifully styled with css animations.",
        "img":img_top_news,
        "language1":"React",
        "language2":"APIs",
        "language3":"CSS Animations",
    }
]




function ProjectCard(props) {
  return (
    <div className="projectCard">
        <img src={props.img} alt={props.alt}></img>
        <div className="projectBodyCard">
        <h2> {props.title} </h2>
        <p> {props.body.slice(0,140) + '...'} </p>
        <div className="languageParagraphContainer">
            <h3 className="languageParagraph"> {props.language1}</h3>
            <h3 className="languageParagraph"> {props.language2}</h3>
            <h3 className="languageParagraph"> {props.language3}</h3>
        </div>
        </div>
    </div>
  );
}



function Projects() {
    return (
        <div className="projectsContainer App">
            <Navibar/>
            <h1> Portfolio Projects </h1>
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
                        language1={project["language1"]}
                        language2={project["language2"]}
                        language3={project["language3"]}
                      />  
                    );
                })}

            </motion.div>
        </div>
       
    )
}

export default Projects;
