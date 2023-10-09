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
                            <h5>Relevant Experience</h5>
                            <small>4 Years as a Cloud System Administrator</small>
                        </article>
                        <article className='about-card'>
                            <FiUsers className='about-icon' />
                            <h5>Michigan State University</h5>
                            <small>Full Stack Web Dev Coding Boot Camp</small>
                        </article>
                        <article className='about-card'>
                            <VscFolderLibrary className='about-icon' />
                            <h5>Working on</h5>
                            <small>The Odin Project</small><br/>
                            <small>Finding a Dev job</small>
                        </article>
                    </div>

                    <p>
                        Hi, I'm Bryant! A highly motivated entry-level Full Stack Developer with a passion for problem solving and a never-ending drive to learn.<br/>
                    </p>
                    <p>
                        My coding journey started with a simple Google search: <strong>"What job is closest to doing crossword puzzles"</strong>.
                        The job I held at the time not only introduced me to crossword puzzles but also made me realize how much enjoyment I received from them (even if I was not able to complete them entirely). 
                        So I thought "There must be a career field that evokes the same type of thinking!".
                    </p>
                    <p>
                        This led me to enroll into a 4 week introductory course to programming with the language being Ruby on Rails. 
                        While there was initially a learning curve for me, this did not dissuade me from pressing forward. In fact this turned out to be exactly what I was looking for and led to me to change my career path entirely.
                        To further my path of learning I taught myself JavaScript, HTML, and CSS. Still, I felt the need to learn more so I enrolled into a Coding Camp where it helped solidify what I already knew and introduced the MERN stack.
                    </p>
                    <p>
                        Collaborate environments are where I thrive, working closely with cross-functional teams to troubleshoot or brainstorm ideas in order to bring them to life.
                        Continuous improvement is something I am always pursuing, therefore criticism is always welcomed!
                    </p>
                    <p>
                        While my current job title is a Cloud System Administrator, I am <i>very</i> excited to get my first job as a Developer.
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