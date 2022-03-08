import React from 'react';

import runBuddy from '../assets/run-buddy.jpg';
import robotGladiators from '../assets/robot-gladiators.jpg';
import blockBreaker from '../assets/block-breaker.jpg';
import techPort from '../assets/tech-port.png';
import foodieSpot from '../assets/foodie-spot.png';
import photoPort from '../assets/ohSnap.png';

const Projects = () => {
    const projects = [
        {
            cardTitle: "Run Buddy",
            cardImage: `${runBuddy}`,
            cardText: "Exercise website for users to enroll with a personal trainer (CSS & HTML)",
            link: "https://brt9029.github.io/run-buddy/",
            buttonText: "Visit the site!"
        },
        {
            cardTitle: "Robot Gladiators",
            cardImage: `${robotGladiators}`,
            cardText: "Text based battle simulator (JS & HTML)",
            link: "https://brt9029.github.io/robot-gladiators/",
            buttonText: "Try it out!"
        },
        {
            cardTitle: "Block Breaker",
            cardImage: `${blockBreaker}`,
            cardText: "Breakout game made using Unity & C#",
            link: "https://brt9029.itch.io/block-breaker",
            buttonText: "Try it!"
        },
        {
            cardTitle: "Tech Port",
            cardImage: `${techPort}`,
            cardText: "My first Team Project! We used JQuery, Bulma CSS, NY Times API, and Virus Total API." +
            "The site offers a real-time URL scanner as well as some of the latest NY Times" +
            "Tech articles to look at while waiting for the scan to finish!",
            link: "https://github.com/tgtiburon/Web_Security",
            buttonText: "Visit the site!"
        },
        {
            cardTitle: "Foodie Spot",
            cardImage: `${foodieSpot}`,
            cardText: "My Second Team Project! This time we used everything learned previously in order to create a Full Stack web application." +
            "We created a Food sharing blog site allowing users to share their experiences with already existing recipes.",
            link: "https://mighty-mesa-79383.herokuapp.com/",
            buttonText: "Visit the site!"
        },
        {
            cardTitle: "Photo Port",
            cardImage: `${photoPort}`,
            cardText: "Basic photography site made using React",
            link: "https://brt9029.github.io/photo-port/#about",
            buttonText: "Visit the site!"
        }

    ]

    return (
        <section id="projects" className="projects">
            <h2>
                Projects
            </h2>

            <div className="card-group row-fluid">
                {projects.map((project) =>
                    <div className="card span-6">
                        <img 
                          className="card-img-top"
                          src={project.cardImage}
                          alt={project.cardTitle + ' preview'}
                          key={project.cardTitle}
                          width="350" height="250" />
                            <div className="card-body">
                                <h3 className="card-title">{project.cardTitle}</h3>
                                <p className="card-text">{project.cardText}</p>
                                <a href={project.link} className="btn" target="_blank">{project.buttonText}</a>
                            </div>
                    </div>
                )}
            </div>

        </section> 
    )
}

export default Projects;