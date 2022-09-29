import React from 'react';

import html from '../assets/html-5.png';
import css from '../assets/css-3.png';
import javaScript from '../assets/js.png';
// import python from '../assets/python.png';
// import rubyOnRails from '../assets/ruby.png';
// import c from '../assets/c-sharp.png';
import express from '../assets/expressJS.png';
import react from '../assets/react.png';
import mongo from '../assets/mongoDB.png';
import node from '../assets/nodeJS.png';
import mysql from '../assets/mysql.png';
import toaster from '../assets/brunch-cartoon.gif';


import resume from '../assets/Bryant_Torres_Resume.PDF';

const Skills = () => {
    const frontEnd = [
        {
            languageName: "HTML",
            description: "HTML badge",
            image: `${html}`
        },
        {
            languageName: "CSS",
            description: "CSS badge",
            image: `${css}`
        },
        {
            languageName: "JavaScript",
            description: "JavaScript badge",
            image: `${javaScript}`
        },
        {
            languageName: "React",
            description: "React badge",
            image: `${react}`
        },
    ]

    const backEnd = [
        // {
        //     backEnd: "Python",
        //     description: "Python Badge",
        //     image: `${python}`
        // },
        {
            backEnd: "Express",
            description: "Express badge",
            image: `${express}`
        },
        {
            backEnd: "Node JS",
            description: "NodeJS badge",
            image: `${node}`
        },
        // {
        //     backEnd: "Ruby on Rails",
        //     description: "Ruby on Rails badge",
        //     image: `${rubyOnRails}`
        // },
        // {
        //     backEnd: "C#",
        //     description: "C# badge",
        //     image: `${c}`
        // },
        {
            backEnd: "MongoDB",
            description: "MongoDB badge",
            image: `${mongo}`
        },
        {
            backEnd: "MySQL",
            description: "MySQL badge",
            image: `${mysql}`
        }
    ]
    return (
        <>
            <section className="skills row">
                <div className="col-md-3"></div>
                    <div className="col-12 col-md-3 front">
                        <h3>Front End Languages:</h3>
                        <ul className="front-end">
                            {frontEnd.map((language) => (
                                <li
                                    key={language.languageName}
                                >
                                    <img src={language.image} alt={language.description}></img>{language.languageName}
                                </li>
                            ))}
                        </ul>
                    </div>

                <div className="col-12 col-md-3 back">
                    <h3>Back End Languages:</h3>
                    <ul className="back-end">
                        {backEnd.map((language) =>(
                            <li
                                key={language.backEnd}
                            >
                                <img src={language.image} alt={language.description}></img>{language.backEnd}
                            </li>
                        ))}
                    </ul>
                </div>
                    <div className="col-md-3"></div>
                <div className="resume-stuff">
                    <div class="tenor-gif-embed" data-postid="15596784" data-share-method="host" data-aspect-ratio="0.834375" data-width="100%">
                        <img src={toaster}></img>
                    </div>

                    <div className="resume-text">
                        <a href={resume} className="resume-btn btn"><h4>View My Resume</h4></a>
                    </div>
                </div>
            </section>        

        </>
    )
}

export default Skills;