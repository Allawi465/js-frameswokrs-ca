import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ContactSendIn } from '../../style/buttons.style';
import MessageAfterSubmit from '../../components/contact';


function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    function onFormSubmit(data) {
        console.log(data);
        reset();
        setFormSubmitted(true);
    }

    if (formSubmitted) {
        return (
            <MessageAfterSubmit />
        );
    }

    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmit)}>
            <h1 className="mt-4">Contact us</h1>
                <FloatingLabel label="Full name"
                    className="my-3 text-black">
                    <Form.Control
                        {...register('fullName')}
                        type="text"
                        name="fullName"
                        placeholder="full name"
                    />
                    <p className='text-white'>{errors.fullName?.message}</p>
                </FloatingLabel>

                <FloatingLabel label="Email address" name="email" className="my-3 text-black">
                    <Form.Control
                        {...register('email')}
                        type="email"
                        name="email"
                        placeholder="name@example.com" />
                    <p className='text-white'>{errors.email?.message}</p>
                </FloatingLabel>

                <FloatingLabel label="Subject" className="my-3 text-black">
                    <Form.Control
                        {...register('subject')}
                        type="text"
                        name="subject"
                        placeholder="Subject" />
                    <p className='text-white'>{errors.subject?.message}</p>
                </FloatingLabel>

                <FloatingLabel label="Body" className="mb-3 text-black">
                    <Form.Control
                        {...register('body')}
                        as="textarea"
                        name="body"
                        placeholder="body"
                        style={{ height: '100px' }}
                    />
                    <p className='text-white'>{errors.body?.message}</p>
                </FloatingLabel>
                <ContactSendIn type="submit">Send in</ContactSendIn>
            </form>
        </>
    );
}

export default ContactForm;