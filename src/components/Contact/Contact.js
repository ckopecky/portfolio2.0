import React, { useContext } from 'react';
import { ContactStyles } from './ContactStyles';
import 'dotenv/config';
import { ThemeContext } from '../../context/ThemeContext';


export const Contact = (props) => {
    const { theme } = useContext(ThemeContext);
    return (
        <ContactStyles theme={theme}>
            <form
                className='contact-form'
                id="contact"
                action={process.env.REACT_APP_FORMSPREE_URI}
                method='POST'>
                <p className='contact-header'>Contact Me!</p>
                <div className='input-wrapper'>
                    <div className='contact-form-input'>
                        <label>Name:</label>
                        <input
                            type='text'
                            name='name'
                            className='form-blank-name-email'
                            placeholder='Joe Sample'
                            required
                        />
                    </div>
                    <div className='contact-form-input'>
                        <label for='email'>Email:</label>
                        <input
                            type='email'
                            name='_replyto'
                            className='form-blank-name-email'
                            placeholder='joe@sample.com'
                            required
                        />
                    </div>

                    <div className='contact-form-input'>
                        <label for='message'>Message:</label>
                        <textarea
                            type='textarea'
                            name='message'
                            className='message'
                            required
                            placeholder='Hi, Christina!'
                        />
                    </div>

                    <button
                        className='submit-button'
                        type='submit'
                        value='Send Message'>
                        Submit
                    </button>
                </div>
            </form>
        </ContactStyles>
    );
}