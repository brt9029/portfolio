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
            name: "Skills",
            description: "Skills"
        },
        {
            name: "Credits",
            description: "Credits"
        }
    ]

    return (
        <header>
            <div className="me">
                    <h1>Bryant Torres</h1>
                <div className="dropdown-content">
                    {categories.map((category) => (
                        <li
                            key={category.name}
                        >
                            <Link to={`/${category.name}`}>{category.name}</Link>
                        </li>
                    ))}
                </div>
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