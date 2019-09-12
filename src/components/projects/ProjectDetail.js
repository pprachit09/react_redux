import React from 'react'
import PropTypes from 'prop-types'

const ProjectDetail = ({ match }) => {
  const id = match.params.id

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Name {id}</span>
          <p>Adipisicing incididunt dolor proident qui aliquip tempor. Dolor reprehenderit elit enim occaecat. Amet duis ipsum nostrud aute do anim tempor tempor proident velit nulla nisi aliqua velit. Culpa sint ipsum dolore magna nulla esse officia est.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Wayne </div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

ProjectDetail.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string
}

export default ProjectDetail
