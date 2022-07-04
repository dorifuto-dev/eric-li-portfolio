import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <ul className='nav-link-container'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/portfolio'>Portfolio</Link>
        <Link className='link' to='/resume'>Resume</Link>
        <Link className='link' to='/contact'>Contact</Link>
      </ul>
    </nav>
  )
}

export default NavBar;