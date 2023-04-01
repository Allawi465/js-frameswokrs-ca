import React from 'react';
import { Container } from 'react-bootstrap';
import { CartHeading, GetCartProducts, OrderSummery } from '../../components/cart/content/index'
import { Helmet } from 'react-helmet-async';

function Cart() {

    return (
        <Container className='container-cart'>
            <Helmet>
                <title>Online Store - Cart</title>
                <meta name="description" content="Check out your shopping cart with our quality products" />
                <meta name="keywords" content="online store, shopping, products, cart, checkout" />
            </Helmet>
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