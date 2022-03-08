import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const Contact = () => {
    const [formState, setFormState] = useState('');

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section id="contact" className="contact">
            <h3>Contact Me</h3>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"><h4>Name:</h4></label>
                    <input type="text" className="form-input" defaultValue={name} name="name" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email"><h4>Email address:</h4></label>
                    <input type="email" className="form-input" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message"><h4>Message:</h4></label>
                    <textarea name="message" className="form-input" defaultValue={message} row="5" onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="btn" type="submit"><h5>Submit</h5></button>
            </form>
        </section>
    )
}

export default Contact;