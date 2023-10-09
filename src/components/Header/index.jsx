import React from 'react';
import './header.css';
import Cta from './cta.jsx';
import HeaderSocials from './headerSocials';

const Header = () => {
    return (
        <header>
            <section className='container header-container' id='home'>
                <h5>Hello, I'm</h5>
                <h1>Bryant</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <Cta />
                <HeaderSocials />

                <div className='me'>
                    <div id='me'></div>
                </div>

                <a className='scroll-down' href='#contact'>Scroll Down</a>
            </section>
        </header>
    );
};

export default Header;