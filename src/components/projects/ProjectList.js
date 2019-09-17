import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      { projects && projects.map((project, i) => (
        <Link to={`/project/${project.id}`} key={ i }>
          <ProjectSummary project={ project }/>
        </Link>
      ))}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array
}

export default ProjectList
