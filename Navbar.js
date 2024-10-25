import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#animals">Animals</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
