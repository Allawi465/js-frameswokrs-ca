import React from 'react';
import { Container } from 'react-bootstrap';
import { RenderApi, Hero } from '../../components/index';


function Home() {
  return (
    <div>
      <Hero />
      <Container className='products-cards'>
        <RenderApi />
      </Container>
    </div>
  );
}

export default Home;