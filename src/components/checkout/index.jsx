import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Loading } from '../../components/index';
import { load, save } from '../../utils/localStorage';
import { CartContext } from '../../components/cart/context/index';
import TotalSummery from './totalSummery';
import CartHistory from './cartHistory';
import { EmptyCart } from '../../components/cart/content/index';
import { tax, shipping } from '../cart/content/orderSummery';

function CheckOutHistory() {
    const { state, dispatch } = useContext(CartContext);
    const [cartHistory, setCartHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        save("cartHistory", state.cart);
    }, [state]);

    useEffect(() => {
        const historyCart = load("cartHistory");
        setCartHistory(historyCart);
        dispatch({ type: 'clearCart' });
        setLoading(false);
    }, [dispatch]);

    if (loading) {
        return <div> <Loading /></div>
    }

    const total = cartHistory.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.quantity;
    }, 0);

    const orderTotal = total + tax + shipping;

    return (
        <Container className="text-white mt-4">
            {cartHistory.length > 0 ? (
                <>
                    <div className='cart-history mt-4'>
                        <div className='cart-history-text'>
                            <CartHistory cartItems={cartHistory} />
                            <TotalSummery total={total} shipping={shipping} tax={tax} orderTotal={orderTotal} />
                        </div>
                    </div>
                </>
            ) : (
                <div className='mt4'>
                    <EmptyCart />
                </div>
            )}
        </Container>
    )
}

export default CheckOutHistory;