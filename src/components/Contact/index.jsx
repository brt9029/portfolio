import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';

const Contact = () => {
    const contact = [
        {
            id: 1,
            method: 'Email',
            title: 'brt9029@gmail.com',
            link: 'mailto:brt9029@gmail.com',
            description: 'Send a message',
            icon: <MdOutlineEmail />
        },
        {
            id: 2,
            method: 'LinkedIn',
            title: '',
            link: 'https://www.linkedin.com/in/bryant-torres-77524321a/',
            description: 'Connect with me',
            icon: <BsLinkedin />
        }
    ]

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j9t9m7h', 'template_3xiojn9', form.current, 'FTBIM9qR_9taQt42_')

        e.target.reset();
    }

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact-container'>
                <div className='contact-options'>
                    {contact.map(({ id, method, title, link, description, icon }) => (
                        <article className='contact-option' key={id}>
                            <div className='contact-option-icon'>{icon}</div>
                            <h4>{method}</h4>
                            <h5>{title}</h5>
                            <a href={link} target='_blank' rel='noreferrer'>{description}</a>
                        </article>
                    ))}
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your E-mail' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
};

export default Contact;