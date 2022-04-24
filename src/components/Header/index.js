import React from 'react';
import { Link } from 'react-router-dom';

import hero from '../../assets/hero.png';

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
            name: "Skills",
            description: "Skills"
        },
        // {
        //     name: "Credits",
        //     description: "Credits"
        // }
    ]

    return (
        <header>
            <img className="me" src={hero}></img>
                <div className="dropdown-content">
                    {categories.map((category) => (
                        <li
                            key={category.name}
                        >
                            <Link to={`/${category.name}`}>{category.name}</Link>
                        </li>
                    ))}
                </div>

            <ul>
                {categories.map((category) => (
                    <li
                        key={category.name}
                    >
                        <Link to={`/${category.name}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </header>
    )
};

export default Header;