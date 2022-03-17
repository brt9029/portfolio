import React from 'react';

const Footer = () => {
    const categories = [
        {
            name: "GitHub",
            description: "Github profile",
            url: "https://github.com/brt9029"
        },
        {
            name: "LinkedIn",
            description: "Linked in profile",
            url: "https://www.linkedin.com/in/bryant-torres-77524321a/"
        },
    ]

    return (
        <footer>
            <ul>
                {categories.map((category) => (
                    <li
                      key={category.name}
                      >
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <a href={category.url} target="_blank">{category.name}</a>
                      </li>
                ))}
            </ul>
        </footer>
    )
};

export default Footer;