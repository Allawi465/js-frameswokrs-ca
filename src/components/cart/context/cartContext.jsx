import { createContext } from "react";

export const CartContext = createContext();

export const initialState = { cart: [], total: 0, totalQuantity: 0 };

export function reducer(state, action) {
    let productIndex;
    let newTotal;
    let cart;
    let newTotalQuantity;

    switch (action.type) {
        // Adding a product
        case 'addProduct':
            cart = [...state.cart];
            productIndex = cart.findIndex((product) => product.id === action.payload.id);
            if (productIndex === -1) {
                cart.push({ ...action.payload, quantity: action.payload.quantity });
            } else {
                cart = [
                    ...cart.slice(0, productIndex),
                    { ...cart[productIndex], quantity: cart[productIndex].quantity + action.payload.quantity },
                    ...cart.slice(productIndex + 1),
                ];
            }
            newTotal = cart.reduce((currentTotal, product) => {
                currentTotal += product.discountedPrice * product.quantity;
                return currentTotal;
            }, 0);
            newTotalQuantity = cart.reduce((currentTotalQuantity, product) => {
                currentTotalQuantity += product.quantity;
                return currentTotalQuantity;
            }, 0);
            return { ...state, cart: cart, total: newTotal, totalQuantity: newTotalQuantity };
        // Update the product
        case 'updateProduct':
            cart = [...state.cart];
            productIndex = cart.findIndex((product) => product.id === action.payload.id);
            if (productIndex !== -1) {
                const newQuantity = action.payload.quantity;
                if (newQuantity > 0) {
                    cart[productIndex].quantity = newQuantity;
                } else {
                    cart.splice(productIndex, 1);
                }
            }
            newTotal = cart.reduce((currentTotal, product) => {
                currentTotal += product.discountedPrice * product.quantity;
                return currentTotal;
            }, 0);
            newTotalQuantity = cart.reduce((currentTotalQuantity, product) => {
                currentTotalQuantity += product.quantity;
                return currentTotalQuantity;
            }, 0);
            return { ...state, cart: cart, total: newTotal, totalQuantity: newTotalQuantity };
        // Removing a product
        case 'removeProduct':
            const productId = action.payload.id;
            const updatedCart = state.cart.filter(product => product.id !== productId);
            newTotal = updatedCart.reduce((currentTotal, product) => {
                currentTotal += product.discountedPrice * product.quantity;
                return currentTotal;
            }, 0);
            newTotalQuantity = updatedCart.reduce((currentTotalQuantity, product) => {
                currentTotalQuantity += product.quantity;
                return currentTotalQuantity;
            }, 0);
            return { ...state, cart: updatedCart, total: newTotal, totalQuantity: newTotalQuantity };
        // Clearing a cart
        case 'clearCart':
            return { cart: [], total: 0, totalQuantity: 0 };

        default:
            return state;
    }
}

export default CartContext;