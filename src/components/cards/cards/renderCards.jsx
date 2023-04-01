import React, { useState } from 'react';
import { useApi } from '../../../hooks/index';
import { Container, Row } from 'react-bootstrap';
import CardsProducts from './index';
import { Search } from '../../../form/index';
import { Loading, ErrorMessage } from '../../index';

function RenderApi() {

  const url = 'https://api.noroff.dev/api/v1/online-shop';

  const { data, isLoading, isError } = useApi(url);
  const [searchInput, setSearchInput] = useState("");

  if (isLoading) {
    return <div className='d-flex justify-content-center mt-4'><Loading /></div>;
  }

  if (isError) {
    return <div style={{ textAlign: 'center' }}><ErrorMessage variant="danger" text="We are sorry, something went wrong." /></div>;
  }

  const products = data.filter((product) => product.title.toLowerCase().includes(searchInput.toLowerCase())).map((product) => <CardsProducts {...product} key={product.id} />);

  return (
    <Container className='products-cards container-lg'>
      <div className='d-flex flex-column text-white mx-2 row'>
        <p className="products-cards-link mt-4">SHOP PRODUCTS</p>
        <div className='d-flex flex-wrap justify-content-between'>
          <h2>
            Our latest Products
          </h2>
          <Search setSearchInput={setSearchInput} />
        </div>
      </div>
      <Row className="products-cards">
        {products.length > 0 ? (
          products
        ) : (
          <div className='text-white my-4' style={{ textAlign: 'center', width: '100%' }}>
            <ErrorMessage variant="dark" text={`No matches for “${searchInput}”`} />
          </div>
        )}
      </Row>
    </Container>
  );
}

export default RenderApi;