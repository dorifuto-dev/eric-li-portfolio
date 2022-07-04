import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <ul className='nav-link-container'>
        <Link className='nav-link' to='/'>Home</Link>
        <Link className='nav-link' to='/portfolio'>Portfolio</Link>
        <Link className='nav-link' to='/contact'>Contact</Link>
      </ul>
    </nav>
  )
}

export default NavBar;