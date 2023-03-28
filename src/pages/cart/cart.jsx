import React from 'react';
import { Container } from 'react-bootstrap';
import { CartHeading, GetCartProducts, OrderSummery } from '../../components/cart/content/index'

function Cart() {

    return (
        <Container className='container-cart'>
            <div className='text-white'>
                <CartHeading />
                <div className='cart'>
                    <GetCartProducts />
                    <OrderSummery />
                </div>
            </div>
        </Container>
    );
}

export default Cart;