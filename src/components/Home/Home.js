import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import jsLogo from '../../images/js-logo.png';
import ngLogo from '../../images/angular-logo-2.png';
import reactLogo from '../../images/react-logo.png';
import tsLogo from '../../images/typescript-logo.svg';
import './Home.css';

const Home = () => {
  return (
    <section className='home-container'>
      <h2 className='home-title'>Eric Li</h2>
      <div className='home-info-container'>
        <div className='skill-badges-container'>
          <img className='skill-badge' src={jsLogo} alt='javascript badge' />
          <img className='skill-badge angular' src={ngLogo} alt='angular badge' />
          <img className='skill-badge' src={reactLogo} alt='react badge' />
          <img className='skill-badge' src={tsLogo} alt='typescript badge' />
        </div>
        <p className='home-description'>Thanks for stopping by! I am a Frontend Developer currently based out of Cottonwood Heights, Utah, United States.</p>
        <p className='home-skillset'>My skillset is Modern Angular, React, Javascript, TypeScript, HTML, CSS. Object Oriented Programming, Test Driven Development.</p>
        <div className='home-btns-container'>
          <Link className="box-1" to='/portfolio'>
            <div className="btn btn-one">
              <span>My work</span>
            </div>
          </Link>
          <Link className="box-1" to='/contact'>
            <div className="btn btn-one">
              <span>Get in touch</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home;