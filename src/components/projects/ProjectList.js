import React from 'react'
import ProjectSummary from './ProjectSummary'
import PropTypes from 'prop-types'

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      { projects && projects.map((project, i) => (
        <ProjectSummary key={ i } project={ project }/>
      ))}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array
}

export default ProjectList
