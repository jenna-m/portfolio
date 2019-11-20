import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import * as yup from 'yup';
import { randomMessage } from './randomMessage';


// EmailJS template params
let template_params = {
    'senderEmail': 'senderEmail_value',
    'senderName': 'senderName_value',
    'message': 'message_value'
}

// EmailJS consts
const service_id = 'default_service';
const template_id = 'jennaportfolio';
const emailJSUserID = 'user_cVacpT4HoGWc7Omos0X8P'


// Yup schema
const schema = yup.object().shape({
    name: yup.string()
        .min(2, '(Must be at least 2 characters)')
        .max(50, '(Cannot be over 50 characters)')
        .required('(Name is required)'),
    email: yup.string()
        .email('(Must be a valid email)')
        .required('(Email is required)'),
    message: yup.string()
        .min(10, '(Please write at least 10 characters)')
        .max(600, '(Please limit yourself to 600 characters)')
        .required('(Message is required)')
});


// Dynamic send button text
export const legendMessage = {
    default: 'Send',
    messageSent: 'Message Sent!',
    messageSentError: 'Error; try again'
}


// Submit method
const handleSubmit = async (values, actions, setLegend) => {
    const { name, email, message } = values;
    const { setStatus, setSubmitting, setErrors, resetForm } = actions;

    template_params['senderName'] = name;
    template_params['senderEmail'] = email;
    template_params['message'] = message;

    try {
        await emailjs.send(service_id, template_id, template_params, emailJSUserID);

        resetForm();
        setLegend(legendMessage.messageSent)
    }
    catch(error) {
        setSubmitting(false);
        setErrors(JSON.stringify(error));
        setStatus({
            msg: legendMessage.messageSentError
        });
        setLegend(legendMessage.messageSentError)
    }
}

export const ContactForm = () => {
    const [legend, setLegend] = useState(legendMessage.default);

    const handleBlur = () => {
        setLegend(legendMessage.default)
    }

    return (
        <div>
            <Formik
                initialValues = {{
                    name: '',
                    email: '',
                    message: ''
                }}
                validationSchema = {schema}
                onSubmit = {(values, actions) => handleSubmit(values, actions, setLegend)}
                >
                    {({ errors }) => (
                    <Form id="contact-form" role="form">
                        <fieldset>
                            Hi, Jenna!
                            <br />
                            My name is
                            { /* Name Input */ }
                            <label for name="name" className="hide-element">
                                Your Name
                            </label>
                            <Field
                                className="field"
                                type="name"
                                name="name"
                                placeholder="{{ your name }}"
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="name" component="error-text" />
                            , <br />
                            and you can reach me at 
                            { /* Email Input */ }
                            <label for name="email" className="hide-element">
                                Your Email
                            </label>
                            <Field
                                className="field"
                                type="email"
                                name="email"
                                placeholder="{{ you@example.com }}"
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="email" component="error-text" />
                            . <br />
                            I just wanted to talk with you about... 
                            { /* Message Input */ }
                            <label for name="message" className="hide-element">
                                Your Message
                            </label>
                            <Field
                                className="textarea"
                                type="message"
                                name="message"
                                placeholder={randomMessage}
                                component="textarea"
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="message" component="error-text" />
                            
                            <div className="submit-button">
                                <button
                                    id="submit"
                                    name="submit"
                                    type="submit"
                                >
                                    { legend }
                                </button>
                            </div>
                        </fieldset>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ContactForm;