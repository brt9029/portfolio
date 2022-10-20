import React from 'react';
import './projects.css';

const Projects = () => {
    const projectList = [
        {
            id: 1,
            title: 'Block Breaker',
            image: 'block-breaker.png',
            link: 'https://brt9029.itch.io/block-breaker',
            gitHub: 'https://brt9029.itch.io/block-breaker'
        },
        {
            id: 2,
            title: 'Tech News',
            image: 'just-tech-news.png',
            link: 'https://just-tech-news-9029.herokuapp.com/',
            gitHub: 'https://github.com/brt9029/just-tech-news'
        },
        {
            id: 3,
            title: 'Foodie Spot',
            image: 'foodie-spot.png',
            link: 'https://mighty-mesa-79383.herokuapp.com/',
            gitHub: 'https://github.com/Jrophoff/foodie-spot'
        },
        {
            id: 4,
            title: 'Photo Port',
            image: 'photo-port.png',
            link: 'http://brt9029.github.io/photo-port',
            gitHub: 'https://github.com/brt9029/photo-port'
        },
        {
            id: 5,
            title: 'Deep Thoughts',
            image: 'deep-thoughts.png',
            link: 'https://deep-thoughts9029.herokuapp.com/',
            gitHub: 'https://github.com/brt9029/deep-thoughts'
        }
    ]
    return (
        <section id='projects'>
            <h5>My Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio-container'>
                {projectList.map(({ id, title, image, link, gitHub}) => (
                    <article className='portfolio-item' key={id}>
                        <div className='portfolio-item-image'>
                            <img src={require(`../../assets/${image}`)} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className='portfolio-item-cta'>
                            <a href={gitHub} className='btn'>Github</a>
                            <a href={link} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;