import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className='contact-container'>
      <h2>Contact</h2>
      <div className='contact-buttons'>
        <a className="box-1" href='https://github.com/dorifuto-dev'>
          <div className="btn btn-one">
            <span>GitHub</span>
          </div>
        </a>
        <a className="box-1" href='https://linkedin.com/in/dorifuto-dev'>
          <div className="btn btn-one">
            <span>LinkedIn</span>
          </div>
        </a>
        <a className="box-1" href='mailto:javadrift96@gmail.com'>
          <div className="btn btn-one">
            <span>Email</span>
          </div>
        </a>
        <a className="box-1" href="https://calendly.com/javadrift">
          <div className="btn btn-one">
            <span>Calendly</span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Contact;