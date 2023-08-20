import React, { createContext, useState } from 'react';
import { Products } from '../Products';

export const StoreContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  //   keep quantity each products
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  //   console.log(cartItems);
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = { cartItems, addToCart, removFromCart };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
