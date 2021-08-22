import React from 'react'
import logo from '../logos/longlogosmall.png'
import gold_line from '../logos/gold_line1500px.png'
import facebook from '../logos/social media/facebook.png'
import pinterest from '../logos/social media/pinterest.png'
import youtube from '../logos/social media/youtube.png'

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer_menu">
                <div className="row">
                    <div className="column">
                        <div className="logo">
                            <img src={ logo } alt="priority1"/>
                        </div>
                        <p className="logo_text">
                            Priority One is a leading provider of managed IT services to enterprise and mid-market accounts.
                        </p>
                    </div>
                    <div className="column footer_contact">
                        <h2>Contact Us</h2>
                        <br />
                        <address>
                            1000 Peachtree Road NE
                            Atlanta, GA 30309
                        </address>
                        <br />
                        <p>404-456-7890</p>
                    </div>
                    <div className="column footer_services">
                        <h2>Our Services</h2>
                        <br />
                        <ul>
                            <li>IT Services</li>
                            <li>End-User</li>
                            <li>IT Consulting</li>
                            <li>Cloud Services</li>
                        </ul>
                    </div>
                    <div className="column footer_hours">
                        <h2>Hours</h2>
                        <br />
                        <ul>
                            <li>Monday: 8AM–5PM</li>
                            <li>Tuesday: 8AM–5PM</li>
                            <li>Wednesday: 8AM–5PM</li>
                            <li>Thursday: 8AM–5PM</li>
                            <li>Friday: 8AM–5PM</li>
                            <li>Saturday: Closed</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                </div>
                
                <div className="footer_bottom">
                    <div className="social_media_icons">             
                        <img src={ facebook } alt="facebook" />   
                        <img src={ youtube } alt="youtube" /> 
                        <img src={ pinterest } alt="pintrest" />
                    </div>
                    <div className="goldline">
                        <img src={ gold_line } alt="gold line" />
                    </div>
                    <p className="copyright">Copyright ©2021 Priority One Help Desk Solutions. All Rights Reserved.</p>
                </div>
            </footer>
        )
    }
}

export default Footer;