import React from 'react'
import PropTypes from 'prop-types'

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted By Wayne</p>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  )
}

ProjectSummary.propTypes = {
  project: PropTypes.object
}

export default ProjectSummary
