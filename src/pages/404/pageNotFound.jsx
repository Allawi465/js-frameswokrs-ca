import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ContinueShop } from '../../style/buttons.style';
import { BiRightArrowAlt } from 'react-icons/bi';

function RouteNotFound() {
    return <div className='text-white'>
        <Container>
            <div style={{ paddingTop: '100px' }}>
                <h1 className='d-flex justify-content-center'>Whoops, that page is gone.</h1>
                <p className='d-flex justify-content-center'>The page you were looking for could not be found.</p>
                <div className='d-flex justify-content-center'>
                    <ContinueShop as={Link} to={"/"}>Go to the Home page <BiRightArrowAlt/></ContinueShop>
                </div>
            </div>
        </Container>
    </div>;
}

export default RouteNotFound;