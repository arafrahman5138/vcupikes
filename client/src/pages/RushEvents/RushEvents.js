import React, {useState, useEffect} from 'react'
import RushCalendar from '../../components/RushCalendar/RushCalendar'
import RushCards from '../../components/RushCards/RushCards'
import './styles.css'
import ToggleButton from '@material-ui/lab/ToggleButton';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

const RushEvents = () => {
    const [calendar, setCalendar] = useState(false)

    useEffect(() => {
      setCalendar(calendar)
    }, [calendar])

    return (
        <div className="App">
          <header>
              <div id="logo">
                <img src="/images/pike.jpg" className="pike" alt="" />
                <span>
                  <b>RUSH {calendar ? 'CALENDAR' : 'CARD'}</b>
                </span>
              </div>
          </header>
          <div className="toggleBtn">
            <ToggleButton
              style = {{ backgroundColor: "#a79e70", color: "#772432", fontWeight: 600, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', '&:hover': {color: 'white'} }}
              value="check"
              selected={true}
              onChange={() => {
                setCalendar(!calendar)
              }}
            >
              {calendar ? "Switch To Card View" : "Switch To Calendar View"}
            </ToggleButton>
          </div>
          
        {!calendar ? (
          <>
            <Container>
              <Grow in>
                <div className="rush__card">
                  <RushCards />
                </div>
              </Grow> 
            </Container>
          </>
          ) : (
          <>
              {/* <Container> */}
              <Grow in>
                <main>
                  <RushCalendar />
                </main>
              </Grow>
              {/* </Container> */}
          </>
        )}
      </div>
    )
}

export default RushEvents
