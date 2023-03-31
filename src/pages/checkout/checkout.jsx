import { CheckOutHistory } from "../../components/index";
import { Helmet } from 'react-helmet-async';

function Checkout() {

    return (
        <div>
            <Helmet>
                <title>Online Store - Checkout</title>
                <meta name="description" content="Complete your order and checkout now" />
                <meta name="keywords" content="checkout, order, online store, shopping" />
            </Helmet>
            <CheckOutHistory />
        </div>

    );
}

export default Checkout;
