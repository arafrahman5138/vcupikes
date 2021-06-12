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
                            Dodgeball
                        </div>
                        <div className="card__eventsEventFooter">
                            <p>8/26</p>
                            <p>2:30</p>
                            <p>Cary Street Gym</p>
                        </div>
                    </div>
                    <div className="card__eventsEvent">
                        <div className="card__eventsEventHeader">
                            Meet the Pikes
                        </div>
                        <div className="card__eventsEventFooter">
                            <p>8/26</p>
                            <p>3:30</p>
                            <p>919 W Grace St</p>
                        </div>
                    </div>
                    <div className="card__eventsEvent">
                        <div className="card__eventsEventHeader">
                            Shrimp Boil
                        </div>
                        <div className="card__eventsEventFooter">
                            <p>8/26</p>
                            <p>5:30</p>
                            <p>919 W Grace St</p>
                        </div>
                    </div>
                    <div className="card__eventsEvent">
                        <div className="card__eventsEventHeader">
                            River Float
                        </div>
                        <div className="card__eventsEventFooter">
                            <p>8/26</p>
                            <p>6:30</p>
                            <p>919 W Grace St</p>
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
                    <p>Rob the Builder</p>
                    <p>(888) 6969 420</p>
                    <p>crackhead@gmail.com</p>
                </div>
                <div className="card__footerChair">
                    <p>Assistant</p>
                    <p>Rob the Builder</p>
                    <p>(888) 6969 420</p>
                    <p>crackhead@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default RushCards
