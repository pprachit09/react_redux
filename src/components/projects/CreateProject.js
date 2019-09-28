import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

const CreateProject = ({ createProject, auth }) => {
  const [project, setProject] = useState({
    title: '',
    content: ''
  })

  const handleChange = e => {
    setProject({ ...project, [e.target.id]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    createProject(project)
  }

  if (!auth.uid) return <Redirect to="/signin" />

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea className="materialize-textarea" id="content" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: project => dispatch(createProject(project))
  }
}

CreateProject.propTypes = {
  createProject: PropTypes.func,
  auth: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
