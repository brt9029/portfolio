import React from 'react';
import './skills.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Skills = () => {
    const frontEnd = [
        {
            id: 1,
            language: 'HTML',
            level: 'Experienced'
        },
        {
            id: 2,
            language: 'CSS',
            level: 'Experienced'
        },
        {
            id: 3,
            language: 'JavaScript',
            level: 'Experienced'
        },
        {
            id: 4,
            language: 'Bootstrap',
            level: 'Experienced'
        },
        {
            id: 5,
            language: 'React',
            level: 'Intermediate'
        }
    ]

    const backEnd = [
        {
            id: 6,
            language: 'Node.js',
            level: 'Intermediate'
        },
        {
            id: 7,
            language: 'MongoDB',
            level: 'Intermediate'
        },
        {
            id: 8,
            language: 'MySQL',
            level: 'Intermediate'
        },
        {
            id: 9,
            language: 'Python',
            level: 'Basic'
        },
        {
            id: 10,
            language: 'C#',
            level: 'Basic'
        },
        {
            id: 11,
            language: 'MongoDB',
            level: 'Intermediate'
        }
    ]
    return (
        <section id='skills'>
            <h5>Current Skills</h5>
            <h2>My Experience</h2>
            <div className='container experience-container'>
                <div className='experience-frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience-content'>
                        {frontEnd.map(({ id, language, level }) => (
                            <article className='experience-details' key={id}>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>{language}</h4>
                                    <small className='text-light'>{level}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className='experience-backend'>
                    <h3>Backend Development</h3>
                    <div className='experience-content'>
                        {backEnd.map(({ id, language, level }) => (
                            <article className='experience-details' key={id}>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>{language}</h4>
                                    <small className='text-light'>{level}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;