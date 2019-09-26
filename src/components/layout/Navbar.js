import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Navbar = ({ auth }) => {
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
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
    auth: state.firebase.auth
  }
}

Navbar.propTypes = {
  auth: PropTypes.object
}

export default connect(mapToState)(Navbar)
