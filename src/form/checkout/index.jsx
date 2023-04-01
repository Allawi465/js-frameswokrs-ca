import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../components/cart/context';
import { save } from '../../utils/localStorage';
import { CheckOut } from '../../style/buttons.style';

function CheckoutButton() {
    const { state } = useContext(CartContext);
  
    const handleButtonClick = () => {
      save("cartHistory", state.cart);
    };
    
    return (
      <div>
        <CheckOut as={Link} to="/Checkout" onClick={handleButtonClick}>
          Checkout
        </CheckOut>
      </div>
    );
  }
  
  export default CheckoutButton;