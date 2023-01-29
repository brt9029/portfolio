import React from 'react';
import './footer.css';
// import { FaFacebookF } from 'react-icons/fa';
// import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
    return (
        <footer>
            <a href='#home' className='footer-logo'>Bryant</a>

            <ul className='permalinks'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer-socials'>
                {/* <a href='Insert Social Link Here'>Insert Social Here</a> */}
            </div>

            <div className='footer-copywright'>
                <small>&copy; 2023 Bryant Torres</small>
            </div>
        </footer>
    );
};

export default Footer;