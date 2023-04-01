import React, { useState, useContext, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { RemoveProduct, UpdateProduct, CartContext } from '../../components/cart/context';
import { RemoveFromCart } from '../../style/buttons.style';

function RemoveProducts(props) {
  const { id, quantity } = props;
  const [num, setNum] = useState(quantity);
  const { dispatch } = useContext(CartContext);

  const handleChangeNum = (e) => {
    const value = e.target.value;
    if (value === "") {
      setNum("");
    } else {
      setNum(parseInt(value));
    }
  };

  useEffect(() => {
    if (num !== quantity && num !== "") {
      UpdateProduct(dispatch, id, num);
    }
  }, [num, quantity, id, dispatch]);

  const handleRemoveProducts = (e) => {
    e.preventDefault();
    RemoveProduct(dispatch, id);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  return (
    <>
      <form>
        <Form.Label htmlFor="inputNumber" style={{ marginBottom: '0px', fontSize: '14px' }}>Quantity</Form.Label>
        <div className='remove-products d-flex flex-wrap mt-1' style={{ gap: '5px' }}>
          <div style={{ minWidth: '10%' }}>
            <Form.Control className='inputNumber' style={{ maxWidth: '73px' }}
              type="number"
              id="inputNumber"
              min="1"
              value={num}
              onChange={handleChangeNum}
              onKeyDown={handleKeyDown}
            />
          </div>
          <RemoveFromCart onClick={handleRemoveProducts}>remove</RemoveFromCart>
        </div>
      </form>
    </>
  );
}

export default RemoveProducts;