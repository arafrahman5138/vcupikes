import React from 'react'
import { Events } from '../Events/Events.js'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
  import './styles.css'

const EventDescription = (props) => {
    const currEvent = Events.find((e) => e.day === props.date)
    // console.log(currEvent.name)
    return (
        <div className="event">
            <div className="event__header">
                <p className="event__name">{currEvent.name}</p>
                <p className="event__time">{currEvent.time}</p>
            </div>
            <div className="event__body">
                <p className="event__desc">{currEvent.description}</p>
            </div>
        </div>
    )
}

export default EventDescription
