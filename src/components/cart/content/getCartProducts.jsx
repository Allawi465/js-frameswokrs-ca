import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import RemoveProducts from '../../../form/cart/removeCart';

function GetCartProducts() {
    const { state } = useContext(CartContext);
    return (
        <div style={{ width: '500px' }}>
            {state.cart.map((product) => (
                <div key={product.id} className="cart-products mb-4">
                    <div className='cart-products-container d-flex'>
                        <Link to={`/product/${product.id}`}>
                            <div className="cart-products-imgContainer">
                                <img src={product.image} alt={product.title} className="cart-products-img img-thumbnail" />
                            </div>
                        </Link>
                        <div className='cart-products-body ms-2 mt-2'>
                            <div className='cart-products-price-title'>
                                <Link to={`/product/${product.id}`}>
                                    <p className="cart-products-title">{product.title}</p>
                                </Link>
                                <div className='d-flex flex-wrap'>
                                    {product.discountedPrice &&
                                        product.discountedPrice < product.price ? (
                                        <>
                                            <p className="cart-products-discountedPrice me-2">
                                                Kr {product.discountedPrice},-
                                            </p>
                                            <p className="cart-products-originalPrice">
                                                Kr {product.price},-
                                            </p>
                                        </>
                                    ) : (
                                        <p className="cart-products-price">
                                            Kr {product.price},-
                                        </p>
                                    )}
                                </div>
                            </div>
                            <RemoveProducts id={product.id} quantity={product.quantity} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GetCartProducts;