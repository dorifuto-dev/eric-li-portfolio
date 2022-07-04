import React from 'react';
import './Portfolio.css';
import projects from '../../data/projectData';
import ProjectCard from '../ProjectCard/ProjectCard';

const Portfolio = () => {
  const projectCards = projects.map(project => {
    return (
      <ProjectCard key={project.id} project={project} />
    )
  })

  return (
    <section className='portfolio-container'>
      { projects && projectCards }
    </section>
  )
}

export default Portfolio;