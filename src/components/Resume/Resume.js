import React from 'react';
import './Resume.css';
import resume from '../../data/Resume.pdf';

const Resume = () => {
  return (
    <section>
      <iframe className='resume-iframe' src={resume}></iframe>
    </section>
  )
}

export default Resume;