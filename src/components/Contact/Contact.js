import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'dotenv/config';


class Contact extends React.Component {


	render() {
		return (
			<div className='main-content contact-wrapper'>
				<Form
					className='contact-form'
					action={process.env.REACT_APP_FORMSPREE_URI}
					method='POST'>
					<p className='contact-header'>Contact Me!</p>
					<div className='input-wrapper'>
						<FormGroup className='contact-form-input'>
							<Label>Name:</Label>
							<Input
								type='text'
								name='name'
								className='form-blank-name-email'
								placeholder='Joe Sample'
								required
							/>
						</FormGroup>
						<FormGroup className='contact-form-input'>
							<Label for='email'>Email:</Label>
							<Input
								type='email'
								name='_replyto'
								className='form-blank-name-email'
								placeholder='joe@sample.com'
								required
							/>
						</FormGroup>

						<FormGroup className='contact-form-input'>
							<Label for='message'>Message:</Label>
							<Input
								type='textarea'
								name='message'
								className='message'
								required
								placeholder='Hi, Christina!'
							/>
						</FormGroup>

						<Button
							className='submit-button'
							type='submit'
							value='Send Message'>
							Submit
						</Button>
					</div>
				</Form>
			</div>
		);
	}
}

export default Contact;
