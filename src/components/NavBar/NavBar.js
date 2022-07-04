import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className='nav-bar'>
      {location.pathname !== '/' && <h2 className='eric'>Eric Li</h2>}
      <div className='nav-link-container'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/portfolio'>Portfolio</Link>
        <Link className='link' to='/resume'>Resume</Link>
        <Link className='link' to='/contact'>Contact</Link>
      </div>
      {/*<Menu width={ '100%' } className='hamburger-nav'>*/}
      {/*  <Link className='link' to='/'>Home</Link>*/}
      {/*  <Link className='link' to='/portfolio'>Portfolio</Link>*/}
      {/*  <Link className='link' to='/resume'>Resume</Link>*/}
      {/*  <Link className='link' to='/contact'>Contact</Link>*/}
      {/*</Menu>*/}
    </nav>
  )
}

export default NavBar;