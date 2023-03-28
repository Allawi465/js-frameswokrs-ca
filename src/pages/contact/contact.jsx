import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../../form/contact';

function Contact() {
    return <div className='text-white'>
        <Container>
        <div style={{maxWidth: '650px', margin: 'auto'}}>
            <h1 className="mt-4">Contact us</h1>
            <ContactForm />
        </div>
        </Container>
    </div>;
}

export default Contact;