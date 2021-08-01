import React from 'react'
import './footer.css'
import './style.css'
import './Home.css'
import InstagramEmbed from '@aarnila/react-instagram-embed';

const Home = () => {
    return (
        <>
        <div className="main">
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
                        <div className="image">
                            {/* <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70203.jpg" /> */}
                            
                        </div>
                        <div className="text">
                            {/* <h1>Follow us on IG!</h1>
                            <div className="cta-container">
                                <div className="cta">
                                    Instagram
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                
                <div className="top-bottom-section">
                    {/* <div className="section-container">
                        <div className="image">
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
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
        </main>
        <InstagramEmbed
  url='https://instagr.am/p/Zw9o4/'
  accessToken='123|456'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
        </div>
        
    </>
    )
}

export default Home
