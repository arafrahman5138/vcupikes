import React from 'react'
import './styles.css'
import { Events } from '../Events/Events'

const RushCards = () => {
    return (
        <div className="card">
            <div className="card__body">
                <div className="card__events">
                    <div className="card__eventsEvent">
                        <div className="card__eventsEventHeader">
                            Flag Football
                        </div>
                        <div className="card__eventsEventFooter">
                            <p>1/26</p>
                            <p>5:30</p>
                            <p>Petronius S. Jones Park</p>
                        </div>
                    </div>
                    <div className="card__eventsEvent">
                        <div className="card__eventsEventHeader">
                            Shrimp Boil
                        </div>
                        <div className="card__eventsEventFooter">
                            <p>1/27</p>
                            <p>6:30</p>
                            <p>919 W Grace St</p>
                        </div>
                    </div>
                    <div className="card__eventsEvent">
                        <div className="card__eventsEventHeader">
                            Meet the Pikes
                        </div>
                        <div className="card__eventsEventFooter">
                            <p>2/02</p>
                            <p>6:00</p>
                            <p>919 W Grace St</p>
                        </div>
                    </div>
                    <div className="card__eventsEvent">
                        <div className="card__eventsEventHeader">
                            Invite Dinner
                        </div>
                        <div className="card__eventsEventFooter">
                            <p></p>
                            <p>TBD</p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="card__logo">
                    <img src="/images/coat.png" alt="" />
                </div>
            </div>
            <div className="card__footer">
                <div className="card__footerChair">
                    <p>Recruitment Chair</p>
                    <p>Noah Allumani</p>
                    <p>(571) 406 9780</p>
                    <p>allumanin@vcu.edu</p>
                </div>
                <div className="card__footerChair">
                    <p>VP of Recruitment</p>
                    <p>Matt Berard</p>
                    <p>(703) 554 4368</p>
                    <p>berardm@vcu.edu</p>
                </div>
            </div>
        </div>
    )
}

export default RushCards
