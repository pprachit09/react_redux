import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import PropTypes from 'prop-types'

const SignedInLinks = ({ signOut, profile }) => {
  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      <li><Link to="/" onClick={signOut}>Log Out</Link></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">{profile.initials}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

SignedInLinks.propTypes = {
  signOut: PropTypes.func,
  profile: PropTypes.object
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
