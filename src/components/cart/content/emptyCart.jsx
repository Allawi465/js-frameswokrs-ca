import React from 'react';
import { Link } from 'react-router-dom';
import { TbShoppingCartPlus } from 'react-icons/tb';
import { ContinueShop } from '../../../style/buttons.style';

function EmptyCart() {
    return (
        <div style={{ paddingTop: '100px' }}>
        <div className='d-flex justify-content-center'>
            <TbShoppingCartPlus size={100} style={{ color: '#FEEAB0' }} />
        </div>
        <div className='d-flex justify-content-center'>
            <h1>Your cart is empty</h1>
        </div>
        <div className='d-flex justify-content-center'>
            <ContinueShop as={Link} to={"/"}>Continue Shopping</ContinueShop>
        </div>
    </div>
    )
}

export default EmptyCart;