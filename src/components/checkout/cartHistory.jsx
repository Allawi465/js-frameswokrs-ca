import React from "react";

function CartHistory({ cartItems }) {
    return (
        <div>
            <p className='cart-history-p'>Payment successful</p>
            <h1 className='cart-history-h1'>Thanks for ordering</h1>
            <p className='cart-history-p2'>
                We appreciate your order, we're currently processing it. So hang tight
                and we'll send your confirmation very soon!
            </p>
            <p className='cart-history-p3'>Order history</p>
            <ul className='cart-history-ul'>
                {cartItems.map((product) => (
                    <li key={product.id} className='cart-history-li'>
                        <div className='d-flex'>
                            <img src={product.image} alt={product.title} style={{ width: '100px' }} className='cart-history-img' />
                            <div className='cart-history-info'>
                                <p className='cart-history-title'>{product.title}</p>
                                <p className='cart-history-quantity'>Qty {product.quantity}</p>
                                <strong className='cart-history-discountedPrice'>Price kr {product.discountedPrice},-</strong>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CartHistory;