//installed packages
import 'dotenv/config';
import React, { useContext } from 'react';
//my context
import { ThemeContext } from '../../context/ThemeContext';
//my styled component
import { ContactStyles } from './ContactStyles';


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
                        <label htmlFor="name">Name:</label>
                        <input
                            type='text'
                            name='name'
                            className='form-blank-name-email'
                            placeholder='Joe Sample'
                            required
                        />
                    </div>
                    <div className='contact-form-input'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            name='_replyto'
                            className='form-blank-name-email'
                            placeholder='joe@sample.com'
                            required
                        />
                    </div>

                    <div className='contact-form-input'>
                        <label htmlFor='message'>Message:</label>
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