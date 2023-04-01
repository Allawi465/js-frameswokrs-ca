import React from 'react';
import { Container } from 'react-bootstrap';
import { RenderApi, Hero } from '../../components/index';
import { Helmet } from 'react-helmet-async';


function Home() {
  return (
    <div>
      <Helmet>
        <title>Online Store - Buy Quality Products</title>
        <meta
          name="description" content="Shop our selection of quality products at great prices" />
        <meta name="keywords" content="online store, shopping, products, discounts, deals" />
      </Helmet>
      <Hero />
      <Container className='products-cards'>
        <RenderApi />
      </Container>
    </div>
  );
}

export default Home;