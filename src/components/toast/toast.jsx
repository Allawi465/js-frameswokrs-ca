import React from 'react';
import { Col, Row, Toast } from 'react-bootstrap';

function AddedProductsToast(props) {
  const { show, setShow, message } = props;

  return (
    <Row>
      <Col xs={6}>
        <Toast className='toast' bg="Light" onClose={() => setShow(false)} animation={true} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Added to cart</strong>
          </Toast.Header>
          <Toast.Body className='text-white'>{message}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default AddedProductsToast;