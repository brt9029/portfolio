import React from 'react';

import blockBreaker from '../assets/block-breaker.PNG';
import techPort from '../assets/tech-port.png';
import critiqueCode from '../assets/critique-code.png';
import foodieSpot from '../assets/foodie-spot.png';
import slayTheMarket from '../assets/stm.png';

const Projects = () => {
    const projects0 = [
        {
            cardTitle: "Block Breaker",
            cardImage: `${blockBreaker}`,
            cardText: "Breakout game made using Unity & C#, objects were drawn by me, background " +
            "images were found from free wallpaper sites.",
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
            buttonText: "GitHub Repository"
        },
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
            link: "https://github.com/Sloansta/slay-the-market",
            buttonText: "GitHub Repository"
        },
        {
            cardTitle: "Critique Code",
            cardImage: `${critiqueCode}`,
            cardText: "Website created after finishing the coding camp at MSU. We took a previously made site and converted it to a " +
            "React and MongoDB site. Note: This has not been fully completed and is not completely funcitonal.",
            link: "https://critique-code.herokuapp.com/",
            buttonText: "Visit the site!"
        }
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
                            width="350" height="250" 
                        />
                            <div className="card-body">
                                <h3 className="card-title">{project.cardTitle}</h3>
                                <a href={project.link} className="btn" target="_blank" rel="noreferrer">{project.buttonText}</a>
                                <p className="card-text project-text">{project.cardText}</p>
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
                            width="350" height="250" 
                        />
                            <div className="card-body">
                                <h3 className="card-title">{project.cardTitle}</h3>
                                <a href={project.link} className="btn" target="_blank" rel="noreferrer">{project.buttonText}</a>
                                <p className="card-text project-text">{project.cardText}</p>
                            </div>
                    </div>
                )}
            </div>

        </section> 
    )
}

export default Projects;