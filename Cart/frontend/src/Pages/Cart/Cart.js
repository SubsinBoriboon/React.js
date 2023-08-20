import React, { useContext } from 'react';
import { Products } from '../../Products';
import { StoreContext } from '../../Context/StoreContext';
function Cart() {
  const { cartItems } = useContext(StoreContext);
  return (
    <div className="Cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="CartItems">
        {Products.map((item, index) => {
          if (cartItems[item.id] !== 0) {
            return (
              <div className="Item" key={index}>
                <h3>Name:{item.name}</h3>
                <h3>Price{item.price}</h3>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Cart;
