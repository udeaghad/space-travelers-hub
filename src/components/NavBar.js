import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';
import '../styles/navbar.css';

const Navbar = () => (
  <nav>
    <div>
      <img id="logo" src={logo} alt="Logo" />
    </div>
    <div>
      <Link to="/">Rockets |</Link>
      <Link to="/missions">Missions |</Link>
      <Link to="/profile">Profile</Link>
    </div>
  </nav>
);

export default Navbar;
