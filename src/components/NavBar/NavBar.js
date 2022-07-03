import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav class='nav-bar'>
      <Link class='nav-link' to='/'>Home</Link>
      <Link class='nav-link' to='/portfolio'>Portfolio</Link>
      <Link class='nav-link' to='/contact'>Contact</Link>
    </nav>
  )
}

export default NavBar;