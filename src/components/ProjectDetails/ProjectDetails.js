import React from 'react';
import {Link, useParams} from 'react-router-dom';
import projects from '../../data/projectData';
import './ProjectDetails.sass';

const ProjectDetails = () => {
  let { id } = useParams()

  const currentProject = projects.find(project => project.id === id)

  return (
    <article className='project-details-container'>
      <img
        className='project-details-image'
        alt={currentProject.title}
        src={currentProject.imageUrl}
      />
      <p className='project-details-title'>{currentProject.title}</p>
      <div className='project-detail-links'>
        {currentProject.deployedUrl
          &&
            <button class='btn btn-primary'>
              <a className='deployed-url' href={currentProject.deployedUrl}>Deployed Link</a>
            </button>
        }
        <button class='btn btn-success'>
          <a className='github-url' href={currentProject.url}>Codebase</a>
        </button>
      </div>
      <p className='project-details-description'>{currentProject.description}</p>
      <Link className='back-link' to={-1}>Back</Link>
    </article>
  )
}

export default ProjectDetails;