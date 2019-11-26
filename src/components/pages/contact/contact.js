import React from 'react';
import ContactForm from './contactForm';

class Contact extends React.Component {
	render() {
		return (
			<div className="contact-content">
				<div id="contact-form">
					<ContactForm />
				</div>
			</div>
		);
	}
}

export default Contact;
