import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

const Notifications = ({ notifications }) => {
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            { notifications && notifications.map(notification => (
              <li key={notification.id}>
                <span className="pink-text">{notification.user} </span>
                <span>{notification.content}</span>
                <div className="grey-text note-date">
                  {moment(notification.time.toDate()).fromNow()}
                </div>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </div>
  )
}

Notifications.propTypes = {
  notifications: PropTypes.array
}

export default Notifications
