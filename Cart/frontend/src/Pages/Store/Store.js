import React, { useContext } from 'react';
import { Products } from '../../Products';
import { StoreContext } from '../../Context/StoreContext';
import './Store.css';
function Store() {
  const { addToCart, cartItems } = useContext(StoreContext);

  return (
    <div className="Store">
      <div className="StoreTitle">
        <h1>Tech Studio</h1>
      </div>
      <div className="Products">
        {Products.map((product, index) => {
          return (
            <div className="Product" key={index}>
              <img src={product.image} alt={product.name} />
              <div className="Content">
                <h4>Name:{product.name}</h4>
                <p>Price:{product.price}฿</p>
              </div>
              <div className="btn">
                <button onClick={() => addToCart(product.id)}>
                  Add to Cart
                  {cartItems[product.id] > 0 && <>({cartItems[product.id]})</>}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Store;
