import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Navbar = ({ auth, profile }) => {
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Coderlust</Link>
        {links}
      </div>
    </nav>
  )
}

const mapToState = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

Navbar.propTypes = {
  auth: PropTypes.object,
  profile: PropTypes.object
}

export default connect(mapToState)(Navbar)
