import React from 'react';
import './projects.css';

const Projects = () => {
    const projectList = [
        {
            id: 1,
            title: 'Pong',
            image: 'pong.png',
            link: 'https://brt9029.github.io/pong/',
            gitHub: 'https://github.com/brt9029/pong'
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
            title: 'Museum of Candy',
            image: 'moc.png',
            link: 'https://brt9029.github.io/museum-of-candy/',
            gitHub: 'https://github.com/brt9029/museum-of-candy'
        },
        {
            id: 5,
            title: 'Deep Thoughts',
            image: 'deep-thoughts.png',
            link: 'https://deep-thoughts9029.herokuapp.com/',
            gitHub: 'https://github.com/brt9029/deep-thoughts'
        },
        {
            id: 6,
            title: 'Mauve: Prime Directive',
            image: 'mauve.png',
            link: 'https://burcarz.itch.io/mauve',
            gitHub: 'https://github.com/phopps/godot-wild-jam'
        },
        {
            id: 7,
            title: 'Monsters vs Robots',
            image: 'mvr.png',
            link: 'https://thaewyn.itch.io/monsters-vs-robots',
            github: 'https://github.com/phopps/mvmxix'
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