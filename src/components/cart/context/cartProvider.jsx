import React, { useReducer, useEffect } from "react";
import { initialState, reducer } from './cartContext';
import { load, save } from "../../../utils/localStorage";
import { CartContext } from "./cartContext";

export function CartProvider(props) {
    const [state, dispatch] = useReducer(reducer, load("cart") || initialState);
  
    useEffect(() => {
      save("cart", state);
    }, [state]);
  
    return (
      <CartContext.Provider value={{ state, dispatch }}>
        {props.children}
      </CartContext.Provider>
    );
}