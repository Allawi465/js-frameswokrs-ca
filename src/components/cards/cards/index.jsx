import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { usePercentage, usePrice } from '../../../hooks/index'
import { ViewItem } from '../../../style/buttons.style';

function CardsProducts(props) {
  const { id, title, price, discountedPrice, imageUrl } = props;
  const { priceToDisplay, originalPrice } = usePrice(price, discountedPrice); 
  const { discountPercentage } = usePercentage(price, discountedPrice)

  return (
    <Col xs={12} sm={6} md={4} lg={4} key={id} className='my-3'>
      <Card className='products-cards-card'>
        <div className='products-cards-imgContainer'>
          <Link to={`/product/${id}`}>
            <Card.Img variant="top" className='products-cards-img' style={{ height: '25rem' }} src={imageUrl} />
          </Link>
          {originalPrice  && (
          <div className='products-cards-saleTag'>
            Sale {discountPercentage.toFixed()}%
          </div>
        )}
        </div>
        <Card.Body className='products-cards-body'>
          <Link to={`/product/${id}`}>
            <Card.Title className='products-cards-title'>{title}</Card.Title>
          </Link>
          {originalPrice  && (
            <p className='products-cards-price'>
              <span className='products-cards-discountedPrice'>Kr {priceToDisplay},-</span>
              {originalPrice && (
                <span className='products-cards-originalPrice ms-2'>Kr {originalPrice},-</span>
              )}
            </p>
          )}
          {!originalPrice && (
            <p className='products-cards-price'>
              Kr {priceToDisplay},-
            </p>
          )}
          <ViewItem as={Link} to={`/product/${id}`} className=''>View item</ViewItem>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardsProducts;