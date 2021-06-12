import React from "react";
// import dateFns from "date-fns";
import format from 'date-fns/format'
import startOfWeek from 'date-fns/startOfWeek'
import addDays from 'date-fns/addDays'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import endOfWeek from 'date-fns/endOfWeek'
import isSameDay from "date-fns/isSameDay";
import isSameMonth from "date-fns/isSameMonth";
// import parse from "date-fns/parse";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
// import parse from "date-fns/fp/parse";
import ReactTooltip from 'react-tooltip';
import EventDescription from "../EventDescription/EventDescription";
import './styles.css'

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
  };

  renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "EEEE";
    const days = [];

    let startDate = startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const events = [new Date("Fri Jun 11 2021 06:30:00 GMT-0400 (Eastern Daylight Time)"), new Date("Tues Jun 15 2021 06:30:00 GMT-0400 (Eastern Daylight Time)")]

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        const isEvent = isSameDay(day, events[0]) || isSameDay(day, events[1])
        // const isEvent = events.includes("Fri Jun 11 2021 00:00:00 GMT-0400 (Eastern Daylight Time)")
        // console.log(day)
        days.push(
          <>
          <div
            data-tip data-for={isEvent ? `event${formattedDate}` : ""}
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isEvent ? "selected" : ""
            }`}
            // id = {isEvent ? "event" : ""}
            key={day}
            onClick={() => this.onDateClick(cloneDay)}
          >
            {/* {console.log(cloneDay)} */}
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
          {isEvent && <ReactTooltip className="tooltip" id={`event${formattedDate}`} type="error">
            <EventDescription date={formattedDate} />
          </ReactTooltip>
          }
          </>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    // console.log(day)
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;