import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../logos/longlogosmall.png'


class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <img src={ logo } alt="priority1"/>
                </div>
                <nav>
                    <a href="#services">Services</a>
                    <a href="#whypriorityone">Why PriorityOne</a>
                    <a href="#features">IT Support</a>
                    <a href="#footer_menu">Location</a>
                    <a href="#">Contact Us</a>
                </nav>
            </header>
        )
    }
}

export default Header;