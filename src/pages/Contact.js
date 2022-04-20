import React from 'react';

import gitHub from '../assets/gitHub.png';
import linkedIn from '../assets/linkedIn.png';
import stackOverflow from '../assets/stackOverflow.png';
import gmail from '../assets/gmail.png';

const Contact = () => {
    const categories = [
        {
            name: "GitHub",
            description: "Github profile",
            url: "https://github.com/brt9029",
            image: `${gitHub}`
        },
        {
            name: "LinkedIn",
            description: "Linked in profile",
            url: "https://www.linkedin.com/in/bryant-torres-77524321a/",
            image: `${linkedIn}`
        },
        {
            name: "Stack Overflow",
            description: "Stack Overflow profile",
            url: "https://stackoverflow.com/users/16704969/brt90299",
            image: `${stackOverflow}`
        },
        {
            name: "E-mail",
            description: "Send an e-mail",
            url: "mailto:brt9029@gmail.com",
            image: `${gmail}`
        }
    ]

    return (
        <>
            <ul className="contact">
                {categories.map((category) => (
                    <li
                      key={category.name}
                      >
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <a href={category.url} target="_blank"><img src={category.image} className="contact-icons"></img>{category.name}</a>
                      </li>
                ))}
            </ul>
        </>
    )
};

export default Contact;