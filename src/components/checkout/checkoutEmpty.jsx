import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContinueShop } from '../../style/buttons.style';
import { CartContext } from '../cart/context';

function CheckoutEmpty() {
    const { state } = useContext(CartContext);

    return (
        <div className='d-flex justify-content-center' style={{ paddingTop: '100px' }}>
          {state.cart.length > 0 ? (
            <div>
              <p>You have items in your cart, please proceed to checkout your items.</p>
                <div className='d-flex justify-content-center'>
                    <ContinueShop as={Link} to="/cart">
                    Show cart
                </ContinueShop>
                </div>
            </div>
          ) : (
            <div>
              <p>Your cart is empty, please add items to proceed to checkout.</p>
              <div className='d-flex justify-content-center'>
                <ContinueShop as={Link} to={"/"}>Continue Shopping</ContinueShop>
              </div>
            </div>
          )}
        </div>
      );
    }

export default CheckoutEmpty;