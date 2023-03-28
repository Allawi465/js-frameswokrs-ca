import React from 'react';
import { Container } from 'react-bootstrap';
import ScrollTop from '../../scrollToTopp';

function Footer() {
    return (
        <footer className='footer-style'>
            <Container>
                <div className='footer-style-sec d-flex flex-wrap justify-content-between'>
                        <p className='footer-style-p mt-2'>&copy; 2023 BUYERS </p>
                        <ScrollTop />
                </div>
            </Container>
        </footer>
    );
}

export default Footer;