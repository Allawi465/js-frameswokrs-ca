import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const schema = yup
    .object({
        fullName: yup
            .string()
            .min(3, 'Your first name should be at least 3 characters.')
            .required('Please enter your full name'),
        email: yup
            .string()
            .email("Invalid email address")
            .required('Please enter your email'),
        subject: yup
            .string()
            .min(3, 'Your subject should be at least 3 characters.')
            .required('Please enter your subject'),
        body: yup
            .string()
            .min(3, 'Your body texts should be at least 3 characters.')
            .required('Please enter your body texts'),
    })
    .required();

function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { errors, isSubmitSuccessful },
    } = useForm({
        resolver: yupResolver(schema),
    });

    function onFormSubmit(data) {
        console.log(data);
        reset({ ...data });
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, formState, reset]);


    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <FloatingLabel label="Full name"
                    className="my-3 text-black">
                    <Form.Control
                        {...register('fullName')}
                        type="text"
                        placeholder="full name"
                    />
                    <p className='text-white'>{errors.fullName?.message}</p>
                </FloatingLabel>

                <FloatingLabel label="Email address" name="email" className="my-3 text-black">
                    <Form.Control
                        {...register('email')}
                        type="email"
                        placeholder="name@example.com" />
                    <p className='text-white'>{errors.email?.message}</p>
                </FloatingLabel>

                <FloatingLabel label="Subject" className="my-3 text-black">
                    <Form.Control
                        {...register('subject')}
                        type="text"
                        placeholder="Subject" />
                    <p className='text-white'>{errors.subject?.message}</p>
                </FloatingLabel>

                <FloatingLabel label="Body" className="mb-3 text-black">
                    <Form.Control
                        {...register('body')}
                        as="textarea"
                        placeholder="body"
                        style={{ height: '100px' }}
                    />
                    <p className='text-white'>{errors.body?.message}</p>
                </FloatingLabel>
                <input type="submit" />
            </form>
        </>
    );
}

export default ContactForm;