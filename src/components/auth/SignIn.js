import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

const SignIn = ({ signIn, authError, auth }) => {
  const [userData, setData] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    setData({ ...userData, [e.target.id]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    signIn(userData)
  }

  if (auth.uid) return <Redirect to="/" />

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
          <div className="red-text center">
            { authError ? <p>{authError}</p> : null }
          </div>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func,
  authError: PropTypes.string,
  auth: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
