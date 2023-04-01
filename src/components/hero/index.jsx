import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import frontImages from '../../images/front-page.jpg'
import { HeroBtn } from '../../style/buttons.style';

function Hero() {
    return (
        <Container fluid className='lead-hero'>
        <div className="lead-hero-bgImages" style={{ backgroundImage: `linear-gradient(360deg, #222326, rgba(34, 34, 34, 0)), url(${frontImages})` }}>
          <div className="lead-hero-wrapper d-flex flex flex-column container">
            <h1 className="lead-hero-heading display-4 fst-italic text-white">Explore Buyers </h1>
            <p className="lead-hero-paragraph lead my-3 text-white">Buyer is a online store that sells almost everything from iPhone chargers, perfume and clothes to even shoes. A great place to explore new brands and discover what you like!</p>
            <div>
              <HeroBtn as={Link} to={"/contact"} >Contacts us</HeroBtn>
            </div>
          </div>
        </div>
        </Container>
    )
};

export default Hero;