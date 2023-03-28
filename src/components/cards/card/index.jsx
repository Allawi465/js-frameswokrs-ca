import React, { useState } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import usePrice from '../../../hooks/usePrice'
import calculatePercentage from '../../../hooks/usePercentage'
import AddProductsToCart from '../../../form/cart/addToCart';
import renderReviews from './reviews';
import AddedProductsToast from '../../toast/toast';

function CardProducts(props) {
    const { id, title, price, discountedPrice, imageUrl, description, rating, reviews } = props;
    const { priceToDisplay, originalPrice } = usePrice(price, discountedPrice);
    const { discountPrice } = calculatePercentage(price, discountedPrice)

    const [showToast, setShowToast] = useState(false);
    const [message, setMessage] = useState("");

    const handleShowToast = (message) => {
        setMessage(message);
        setShowToast(true);
    };

    return (
        <div>
            <AddedProductsToast show={showToast} message={message} setShow={setShowToast} />
            <div className='topHeading'>
                <Container className='topHeading-container'>
                    <h1 className='topHeading-h1 mx-2'>
                        {title}
                    </h1>
                </Container>
            </div>
            <div key={id} className='products-card' style={{ margin: 'auto', marginTop: '50px' }}>
                <Col key={id} className='products-card-section text-white' style={{ margin: 'auto' }}>
                    <div className='d-flex flex-wrap' style={{ gap: '10px' }}>
                        <div className='products-card-imgContainer'>
                            <Card.Img variant="top" className='products-card-img' src={imageUrl} />
                            {originalPrice && (
                                <div className='products-cards-saleTag'>
                                    save {discountPrice.toFixed()},-
                                </div>
                            )}
                        </div>
                        <div className='products-card-body'>
                            <h2 className='products-card-title'>{title}</h2>
                            {originalPrice && (
                                <p className='products-card-price'>
                                    <span className='products-card-discountedPrice'>Kr {priceToDisplay},-</span>
                                    {originalPrice && (
                                        <span className='products-cards-originalPrice ms-2'>Kr {originalPrice},-</span>
                                    )}
                                </p>
                            )}
                            {!originalPrice && (
                                <p className='products-card-price'>
                                    Kr {priceToDisplay},-
                                </p>
                            )}
                            <AddProductsToCart id={id} title={title} price={price} discountedPrice={discountedPrice} image={imageUrl} handleShowToast={handleShowToast} />

                            <div className='products-card-description mb-5 mt-4 text-white'>
                                <h2 className='mt-2'>Description</h2>
                                <p>{description}</p>
                            </div>
                            {renderReviews(reviews, rating)}
                        </div>
                    </div>
                </Col>
            </div>
        </div>
    );
}

export default CardProducts;