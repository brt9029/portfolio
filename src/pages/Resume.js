import React from 'react';
import resume from '../assets/Bryant_Torres_Resume.PDF';

const Resume = () => {
    return (
        <section className="resume">
                <h3>Skills leanred</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Ruby on Rails</li>
                    <li>C#</li>
                    <li>MERN Stack (MongoDB, ExpressJS, React, NodeJS)</li>
                    <li>GraphQL</li>
                </ul>
                <span></span>
                <h3>View my resume below</h3>
                <a href={resume} className="resume-btn"><h4>Click Here!</h4></a>
        </section>
    )
}

export default Resume;