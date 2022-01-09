import React from 'react'
import './footer.css'
import './style.css'
import './Home.css'
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillSlackCircle,
    AiFillFacebook
  } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import InstagramEmbed from 'react-instagram-embed';

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
                    <h3>Rush PIKE!</h3>
                    <div className="cta">
                        <Link to="/rushform" className="homelink"> Rush Now! </Link>
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
                        <a href="http://firemanschallenge.org/" className="homelink">Firemans Challenge</a>
                    </div>
                </div>
            </section>
            {/* <section>
                <div className="top-bottom-section">
                    <div className="section-container">
                        <div className="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" />
                            
                        </div>
                        <div className="text">
                           
                        </div>
                    </div>
                </div>
                
                <div className="top-bottom-section">
                    <div className="section-container">
                        <div className="image">
                            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72045.jpg" />
                        </div>
                        <div className="text">
                        <h1>Follow us on IG!</h1>
                            <div className="cta-container">
                                <div className="cta">
                                    Instagram
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="purple">CONNECT WITH US</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://twitter.com/pikes_vcu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/PIKEatVCU/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pikes_vcu/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        </div>
        </main>
        </div>
        
    </>
    )
}

export default Home
