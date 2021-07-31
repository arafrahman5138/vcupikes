import React from 'react'
import './footer.css'
import './style.css'
import './Home.css'

const Home = () => {
    return (
        <>
        <main>
        <div className="main-container">
            <section className="announcements">
                <div className="text">
                    <h1>WELCOME</h1>
                    <h3>To the Lambda Chi Chapter</h3>
                    <h3>Of the Pi Kappa Alpha Fraternity</h3>
                </div>
                
                    <img src="/images/brothers.jpeg" height="300vh" width="400vw"/>
                
            </section>
            <section className="rewards left-right-section">
                <div className="text">
                    <h1>RUSH IS A TAP AWAY</h1>
                    <h3>Rush PIKE or transfer</h3>
                    <div className="cta">
                        Join now
                    </div>
                </div>
                <div className="image">
                    <img src="images/goal.jpeg" />
                </div>
            </section>
            <section className="chill left-right-section">
                <div className="image">
                    <img src="images/fc2.jpeg" />
                </div>
                <div className="text">
                    <h1>Firemans Challenge</h1>
                    <h3>Donate to the Evans Hanes Burn Center</h3>
                    <div className="cta">
                        Firemans Challenge
                    </div>
                </div>
            </section>
            <section>
                <div className="top-bottom-section">
                    <div className="section-container">
                        {/* <div className="image">
                            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70203.jpg" />
                        </div>
                        <div className="text">
                            <h1>Order and pick up. Easy as that.</h1>
                            <h3>Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you.</h3>
                            <div className="cta-container">
                                <div className="cta">
                                    See pickup options
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="top-bottom-section">
                    <div className="section-container">
                        {/* <div className="image">
                            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72045.jpg" />
                        </div>
                        <div className="text">
                            <h1>Floating into summer like…</h1>
                            <h3>Keep the laid-back vibes going. Order Starbucks drinks on Uber Eats.**</h3>
                            <div className="cta-container">
                                <div className="cta">
                                    Order now
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
        </main>

        
    </>
    )
}

export default Home
