import React from 'react';
import { Link } from 'react-router-dom'; 
import "./../Componant/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <h2 className='nav-brand'>E-Com</h2>
      <Link className='nav-link' to="/">Home</Link>
      <Link className='nav-link' to="/products">All Products</Link>
      <Link className='nav-link' to="/categories">Categories</Link>
      <Link className='nav-link' to="/account">Account</Link>
      <Link className='nav-link' to="/cart">Cart</Link>
    </div>
  );
}

export default Navbar;
