import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function AddedProductsToast(props) {
  const { show, setShow, message } = props;

  return (
    <Row>
      <Col xs={6}>
        <Toast  bg="Light" onClose={() => setShow(false)} animation={true} show={show} delay={1800} autohide style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Toast.Header>
            <strong className="me-auto">BUYERS.</strong>
          </Toast.Header>
          <Toast.Body className='text-white'>{message}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default AddedProductsToast;