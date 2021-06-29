import React from 'react'
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import EventDescription from "../EventDescription/EventDescription";

const StyledTooltip = styled(ReactTooltip)`
  max-width: 25vh;
  white-space: normal;
  place-self: top;
  &.type-dark.place-top {
    background-color: #772432;
    color: #ffcb4f;
    padding: 0.3rem 1rem;
  }
  &.type-dark.place-left {
    background-color: #772432;
    color: #ffcb4f;
    padding: 0.3rem 1rem;
  }
  &.type-dark.place-right {
    background-color: #772432;
    color: #ffcb4f;
    padding: 0.3rem 1rem;
  }
  &.type-dark.place-bottom {
    background-color: #772432;
    color: #ffcb4f;
    padding: 0.3rem 1rem;
  }
`
const EventToolip = ({ id, formattedDate }) => {
    return(
        <StyledTooltip id={id} place="top">
            <EventDescription date={formattedDate} />
        </StyledTooltip>
    )
}

export default EventToolip