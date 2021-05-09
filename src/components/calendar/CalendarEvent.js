import React from 'react'

export const CalendarEvent = ({event}) => {
    const {title,user} = event;
    return (
        <div className="d-flex flex-column">
            <strong className="mb-1">{title}</strong>
            <span><i className="fas fa-user me-1"></i>{user.name}</span>
        </div>
    )
}
