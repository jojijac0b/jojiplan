import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects }) => {
  const projectList = projects?
    projects.map((project) => {
      return (
        <Link to={'/project/'+ project.id} key={project.id}>
          <ProjectSummary project={project}/>
        </Link>
      )
    }) : <div>No Projects!</div>;

  return (
    <div className="section project-list">
      {projectList}
    </div>
  )
}

export default ProjectList
