import React from 'react';

const Nav = () => {
    const categories = [
        {
            name: "About",
            description: "Information about me"
        },
        {
            name: "Projects",
            description: "List of projects worked on"
        },
        {
            name: "Contact",
            description: "Contact information"
        }
    ]

    return (
        <header>
            <h1>
                Portfolio
            </h1>
            <ul>
                {categories.map((category) => (
                    <li
                      key={category.name}
                      >
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <a href={`/${category.name}`}>{category.name}</a>
                      </li>
                ))}
            </ul>
        </header>
    )
};

export default Nav;