import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
  const { notifications } = props
  const notificationsList = notifications? notifications.map(n => {
    return (
      <li key={n.id}>
        <span className="pink-text">{n.user} </span>
        <span>{n.content}</span>
        <div className="grey-text note-date">
          {moment(n.time.toDate()).fromNow()}
        </div>
      </li>
    )
  }) : null;

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span>Notifications</span>
          <ul className="notifications">
            {notificationsList}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
