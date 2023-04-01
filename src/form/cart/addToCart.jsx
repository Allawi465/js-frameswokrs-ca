import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { CartContext, AddProduct  } from '../../components/cart/context';
import { AddCart } from '../../style/buttons.style';

function AddProductsToCart(props) {
  const [num, setNum] = useState(1);
  const { state, dispatch } = useContext(CartContext);
  const { id, title, price, discountedPrice, image, handleShowToast } = props;

  const handleChangeNum = (event) => {
    setNum(parseInt(event.target.value));
  };

  const handleAddProducts = (e) => {
    e.preventDefault();
    AddProduct(state, dispatch, id, title, price, discountedPrice, image, num);
    setNum(1);
    handleShowToast(`${title} added ( ${num} pcs ) to cart`);
  };

  return (
    <>
      <form className='products-card-form'>
        <Form.Label htmlFor="inputNumber">Quantity</Form.Label>
        <div className='d-flex flex-wrap mt-1' style={{ gap: '5px' }}>
          <div style={{ minWidth: '10%' }}>
            <Form.Control className='inputNumber' style={{ maxWidth: '73px' }}
              type="number"
              id="inputNumber"
              min="1"
              value={num}
              onChange={handleChangeNum}
            />
          </div>
          <AddCart onClick={handleAddProducts}>Add to cart</AddCart>
        </div>
      </form>
    </>
  );
}

export default AddProductsToCart;