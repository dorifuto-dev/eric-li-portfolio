import React from 'react';
import {Link, useParams} from 'react-router-dom';
import projects from '../../data/projectData';
import './ProjectDetails.css';

const ProjectDetails = () => {
  let { id } = useParams()

  const currentProject = projects.find(project => project.id === id)

  return (
    <article>
      <p>{currentProject.description}</p>
      <Link to={-1}>Back</Link>
    </article>
  )
}

export default ProjectDetails;