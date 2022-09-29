import React from 'react';

import gitHub from '../assets/gitHub.png';
import linkedIn from '../assets/linkedIn.png';
import stackOverflow from '../assets/stackOverflow.png';
import gmail from '../assets/gmail.png';

const Contact = () => {
    const category0 = [
        {
            name: "E-mail",
            description: "Send an e-mail",
            url: "mailto:brt9029@gmail.com",
            image: `${gmail}`
        },
        {
            name: "LinkedIn",
            description: "Linked in profile",
            url: "https://www.linkedin.com/in/bryant-torres-77524321a/",
            image: `${linkedIn}`
        },
    ]

    const category1 = [
        {
            name: "GitHub",
            description: "Github profile",
            url: "https://github.com/brt9029",
            image: `${gitHub}`
        },
        {
            name: "Stack Overflow",
            description: "Stack Overflow profile",
            url: "https://stackoverflow.com/users/16704969/brt90299",
            image: `${stackOverflow}`
        }
    ]

    return (
        <>
            <section className="row">
                <div className="col-3"></div>
                <div className="col-3">
                    {category0.map((category) => (
                        <div className="contact" key={category.name}>
                            <a href={category.url} target="_blank" rel="noreferrer"><img src={category.image} className="contact-icons"></img></a>
                            <p>{category.name}</p>
                        </div>
                    ))}
                </div>

                <div className="col-3">
                    {category1.map((category) => (
                        <div className="contact" key={category.name}>
                            <a href={category.url} target="_blank" rel="noreferrer"><img src={category.image} className="contact-icons"></img></a>
                            <p>{category.name}</p>
                        </div>
                    ))}
                </div>
                <div className="col-3"></div>
            </section>
        </>
    )
};

export default Contact;