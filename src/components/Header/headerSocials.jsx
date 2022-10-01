import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='header-socials'>
            <a href='https://linkedin.com' target='_blank' rel='noreferrer'><BsLinkedin /></a>
            <a href='https://github.com/brt9029' target='_blank' rel='noreferrer'><FaGithub /></a>
        </div>
    );
};

export default HeaderSocials;