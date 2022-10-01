import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { MdWorkOutline } from 'react-icons/md';
import { RiMessage2Line } from 'react-icons/ri';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#home');
    return(
        <nav>
            <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''} ><AiOutlineHome /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BiBook /></a>
            <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><MdWorkOutline /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage2Line /></a>
        </nav>
    );
}

export default Nav;