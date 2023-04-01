import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/index';
import { CheckoutButton } from '../../../form';
import { BiRightArrowAlt } from 'react-icons/bi';

export const tax = 59;
export const shipping = 99;

function OrderSummery() {
    const { state } = useContext(CartContext);
    const  orderTotal = state.total + tax + shipping;
    return (
        <div className='cart-summery'>
            {state.cart.length >= 1 ? (
                <div className='cart-summery-container'>
                    <h3 className='cart-summery-title'>Order summery</h3>
                    <div className='cart-summery-sub d-flex justify-content-between'>
                        <strong className='cart-summery-subtitle'> Subtotal </strong>
                        <span className='cart-summery-total'> Kr {state.total.toFixed(2)},- </span>
                    </div>
                    <div className='cart-summery-sub d-flex justify-content-between'>
                        <strong className='cart-summery-subtitle'> Shipping estimate</strong>
                        <span className='cart-summery-total'> Kr 99,- </span>
                    </div>
                    <div className='cart-summery-sub d-flex justify-content-between'>
                        <strong className='cart-summery-subtitle'> Tax estimate</strong>
                        <span className='cart-summery-total'> Kr 59,- </span>
                    </div>
                    <div className='cart-summery-subtotal d-flex justify-content-between'>
                        <strong className='cart-summery-subtitleTotal'> Order total </strong>
                        <span className='cart-summery-total'> Kr {orderTotal.toFixed(2)},- </span>
                    </div>
                    <div style={{margin: '10px'}}>
                        <CheckoutButton />
                        <div className='d-flex justify-content-center'>
                            <p style={{margin: '10px'}}>or <Link to='/' style={{color: '#A29FFA'}}>Continue Shopping<BiRightArrowAlt/></Link></p>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default OrderSummery;