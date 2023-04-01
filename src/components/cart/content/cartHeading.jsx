import React, { useContext } from 'react';
import { CartContext } from '../context/index';
import { EmptyCart } from './index';

function CartHeading() {
    const { state } = useContext(CartContext);
    return (
        <div className="mt-4 mb-4">
            {state.cart.length > 0 ? (
                <div className='heading'>
                    <h1 className='heading-h1'>Shopping Cart</h1>
                </div>
            ) : (
               <EmptyCart />
            )}
        </div>
    )
}

export default CartHeading;