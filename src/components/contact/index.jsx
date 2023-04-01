import React from 'react';
import { Link } from 'react-router-dom';
import { ContinueShop } from '../../style/buttons.style';

function MessageAfterSubmit() {
    return (
        <div>
            <h1 className='mt-4 mb-2'>Thanks for getting in touch!</h1>
            <p className='mb-4' style={{ marginBottom: '0' }}>You should receive a confirmation email soon. </p>
            <ContinueShop as={Link} to="/">Go Home</ContinueShop>
        </div>
    )
}

export default MessageAfterSubmit;