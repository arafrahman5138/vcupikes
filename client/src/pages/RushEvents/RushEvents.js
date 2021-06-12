import React from 'react'
import RushCalendar from '../../components/RushCalendar/RushCalendar'
import RushCards from '../../components/RushCards/RushCards'
import './styles.css'

const RushEvents = () => {
    return (
        <div className="App">
        {/* <header>
          <div id="logo">
            <img src="/images/pike.jpg" className="pike" alt="" />
            <span>
              <b>RUSH CALENDAR</b>
            </span>
          </div>
        </header>
        <main>
          <RushCalendar />
        </main> */}
        <div className="rush__card">
          <RushCards />
        </div>
      </div>
    )
}

export default RushEvents
