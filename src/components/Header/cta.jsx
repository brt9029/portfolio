import React from 'react';
import resume from '../../assets/btorres-resume.pdf';

const Cta = () => {
    return (
        <div className='cta'>
            <a className='btn' href={resume} download>Download Resume</a>
            <a className='btn btn-primary' href='#contact'>Let's chat</a>
        </div>
    );
};

export default Cta;