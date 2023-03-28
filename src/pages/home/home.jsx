import React from 'react';
import { Container } from 'react-bootstrap';
import RenderApi from '../../components/cards/cards/renderCards';
import Hero from '../../components/hero/index';


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