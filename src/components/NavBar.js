import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../image/logo.png';
import '../styles/navbar.css';

const Navbar = () => {
  const links = [

    {
      id: 1,
      path: '/',
      text: 'Rockets',
      className: 'rocket-link',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
      className: 'mission-link',
    },
    {
      id: 3,
      path: '/profile',
      text: 'Profile',
      className: 'profile-link',
    },
  ];

  return (
    <nav>
      <div className="website-header">
        <img id="logo" src={logo} alt="Logo" />
        <h1>Space Travelers Hub</h1>
      </div>
      <ul className="navItems">
        {links.map((link) => (
          <li key={link.id} className={link.className}>
            <NavLink to={link.path}>
              {link.text}
              {'  |'}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
