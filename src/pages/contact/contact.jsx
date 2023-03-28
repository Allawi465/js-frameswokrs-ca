import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../../form/contact';

function Contact() {
    return <div className='text-white'>
        <Container>
        <div style={{maxWidth: '500px', margin: 'auto', paddingTop: '60px'}}>
            <ContactForm />
        </div>
        </Container>
    </div>;
}

export default Contact;