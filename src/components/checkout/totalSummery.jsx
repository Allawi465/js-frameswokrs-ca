import React from "react";
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';

function TotalSummery(pops) {
    const {total, shipping, tax, orderTotal} = pops;
    return (
        <div>
            <div style={{ maxWidth: '600px' }}>
                <div className='d-flex justify-content-between'>
                    <p>Subtotal</p>
                    <span>Kr {total.toFixed(2)},-</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <p>shipping</p>
                    <p>Kr {shipping},-</p>
                </div>
                <div className='d-flex justify-content-between' style={{ borderBottom: '2px solid #999999' }}>
                    <p>Taxes</p>
                    <span>Kr {tax},-</span>
                </div>
                <div className='d-flex justify-content-between mt-2'>
                    <p>Total</p> <span>Kr {orderTotal.toFixed(2)},-</span>
                </div>
            </div>
            <div className='continueShop'>
                <Link to='/' style={{ color: '#A29FFA' }}>Continue Shopping<BiRightArrowAlt /></Link>
            </div>
        </div>
    )
}

export default TotalSummery;