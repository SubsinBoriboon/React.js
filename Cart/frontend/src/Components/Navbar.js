import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Links">
        <Link to="/">Home</Link>
        <Link to="/Store">Store</Link>
        <Link to="/cart">
          Cart
          <ShoppingCart />
        </Link>
        <Link to="/cart">Login</Link>
        <Link to="/cart">Logout</Link>
      </div>
    </div>
  );
};
export default Navbar;
