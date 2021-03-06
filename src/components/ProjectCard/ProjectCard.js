import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({project}) => {
  return (
    <Link className='project-link' to={`/projects/${project.id}`}>
      <article className='project-card'>
        <img className='project-image' src={project.imageUrl} alt={project.title}/>
          <h2 className='project-title'>{project.title}</h2>
        <div className='cover'></div>
      </article>
    </Link>
  )
}

export default ProjectCard;
