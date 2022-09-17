import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1>Math Magicians</h1>
    <nav>
      <span><Link to="Home">Home</Link></span>
      <span>|</span>
      <span><Link to="Calculator">Calculator</Link></span>
      <span>|</span>
      <span><Link to="Quote">Quote</Link></span>
    </nav>
  </header>
);

export default Navbar;
