import React from 'react';

import blockBreaker from '../assets/block-breaker.PNG';
import pythonGen from '../assets/pythonGen.png';
import foodieSpot from '../assets/foodie-spot.png';
import slayTheMarket from '../assets/stm.png';

const Projects = () => {
    const projects0 = [
        {
            cardTitle: "Block Breaker",
            cardImage: `${blockBreaker}`,
            cardText: "Breakout game made using Unity & C#, objects were drawn by me, background" +
            " ",
            link: "https://brt9029.itch.io/block-breaker",
            buttonText: "Try it!"
        },
        {
            cardTitle: "Password Generator",
            cardImage: `${pythonGen}`,
            cardText: "Python script for generating passwords, includes letters," +
            " numbers, and special characters if selected to be included",
            link: "https://github.com/brt9029/python-password-generator",
            buttonText: "Github Repository"
        }
    ]

    const projects1 = [
        {
            cardTitle: "Foodie Spot",
            cardImage: `${foodieSpot}`,
            cardText: "My Second Team Project! This time we used everything learned previously in order to create a Full Stack web application." +
            "We created a Food sharing blog site allowing users to share their experiences with already existing recipes.",
            link: "https://mighty-mesa-79383.herokuapp.com/",
            buttonText: "Visit the site!"
        },
        {
            cardTitle: "Slay the Market",
            cardImage: `${slayTheMarket}`,
            cardText: "My Third Team Project! This is a Card game made using React.js and Stock values for card stats. " +
            "Battle against NFTs and other ridiculous monsters as you use stock cards in combat (yes, there are memes)",
            link: "https://tgtiburon-slay-the-market.herokuapp.com/Player",
            buttonText: "Give it a try!"
        },
    ]

    return (
        <section id="projects" className="projects">
            <h2>
                Projects
            </h2>

            <div className="card-group row-fluid">
                {projects0.map((project) =>
                    <div className="card span-6">
                        <img 
                          className="card-img-top"
                          src={project.cardImage}
                          alt={project.cardTitle + ' preview'}
                          key={project.cardTitle}
                          width="350" height="250" />
                            <div className="card-body">
                                <h3 className="card-title">{project.cardTitle}</h3>
                                <span></span>
                                <a href={project.link} className="btn" target="_blank" rel="noreferrer">{project.buttonText}</a>
                                <p className="card-text">{project.cardText}</p>
                            </div>
                    </div>
                )}
            </div>
            <div className="card-group row-fluid">
                {projects1.map((project) =>
                    <div className="card span-6">
                        <img 
                          className="card-img-top"
                          src={project.cardImage}
                          alt={project.cardTitle + ' preview'}
                          key={project.cardTitle}
                          width="350" height="250" />
                            <div className="card-body">
                                <h3 className="card-title">{project.cardTitle}</h3>
                                <span></span>
                                <a href={project.link} className="btn" target="_blank" rel="noreferrer">{project.buttonText}</a>
                                <p className="card-text">{project.cardText}</p>
                            </div>
                    </div>
                )}
            </div>

        </section> 
    )
}

export default Projects;