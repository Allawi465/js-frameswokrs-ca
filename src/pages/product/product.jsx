import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useApi } from '../../hooks/index';
import { ErrorMessage, Loading, CardProducts } from '../../components/index';
import { Helmet } from 'react-helmet-async';

function Product() {
    let { id } = useParams();

    const url = `https://api.noroff.dev/api/v1/online-shop/${id}`;

    const { data, isLoading, isError } = useApi(url);

    if (isLoading) {
        return <div className='d-flex justify-content-center mt-4'><Loading /></div>;
    }

    if (isError) {
        return <div style={{ textAlign: 'center' }}><ErrorMessage variant="danger" text="We are sorry, something went wrong." /></div>;
    }

    return (
        <div>
            <Helmet>
                <title>{`Online Store - ${data.title}`}</title>
                <meta name="description" content={`Buy the best ${data.title} at our online store`} />
                <meta name="keywords" content={`${data.title}, online store, shopping, products`} />
            </Helmet>
            <Container>
                <CardProducts id={data.id} title={data.title} price={data.price} discountedPrice={data.discountedPrice} imageUrl={data.imageUrl} description={data.description} reviews={data.reviews} rating={data.rating} />
            </Container>
        </div>
    );
}


export default Product;