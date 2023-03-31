import React from 'react';
import { Container } from 'react-bootstrap';
import { ContactForm } from '../../form/index';
import { Helmet } from 'react-helmet-async';

function Contact() {
    return <div className='text-white'>
        <Helmet>
            <title>Online Store - Contact Us</title>
            <meta name="description" content="Get in touch with us today!" />
            <meta name="keywords" content="contact, online store, shopping, products" />
        </Helmet>
        <Container>
            <div style={{ maxWidth: '500px', margin: 'auto', paddingTop: '60px' }}>
                <ContactForm />
            </div>
        </Container>
    </div>;
}

export default Contact;