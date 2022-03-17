import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
        },
        {
            name: "Resume",
            description: "Resume"
        }
    ]

    return (
        <header>
            <Link to='/'>
                <h1 className="m-0">Bryant Torres</h1>
            </Link>
            <ul>
                {categories.map((category) => (
                    <li
                      key={category.name}
                      >
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <Link to={`/${category.name}`}>{category.name}</Link>
                      </li>
                ))}
            </ul>
        </header>
    )
};

export default Header;