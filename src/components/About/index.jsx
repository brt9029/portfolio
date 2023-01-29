import React from 'react';
import './about.css';
import Me from '../../assets/me-about.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return(
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about-container'>
                <div className='about-me'>
                    <div className='about-me-image'>
                        <img src={Me} alt='Laptop' />
                    </div>
                </div>
                
                <div className='about-content'>
                    <div className='about-cards'>
                        <article className='about-card'>
                            <FaAward className='about-icon' />
                            <h5>Experience</h5>
                            <small>4 Years in the Tech Industry</small>
                        </article>
                        <article className='about-card'>
                            <FiUsers className='about-icon' />
                            <h5>Michigan State University</h5>
                            <small>Full Stack Web Dev Coding Boot Camp</small>
                        </article>
                        <article className='about-card'>
                            <VscFolderLibrary className='about-icon' />
                            <h5>Working on</h5>
                            <small><a href='https://github.com/DevelopThisOfficial/operation-jungle-knight'>Operation Jungle Knight</a>,</small><br/>
                            <small>Entering GameJams using Godot & C#!</small>
                        </article>
                    </div>

                    <p>
                        Hi, I'm Bryant! A self-taught<i>(mostly)</i> and motivated Full Stack Developer. My expertise lies within back-end apps, the main languages in my stack are JavaScript, React, and HTML/CSS.
                        While my current job title is a System Administrator, I am looking to get my first job as a Developer.
                    </p>
                </div>


                
            </div>
            
            <div className="about-email">
                <a href='#contact' className='btn btn-primary'>Send me an e-mail</a>
            </div>
        </section>
    );
}

export default About;