import React from 'react'
import ReactDOM from 'react-dom'
import img from '../logos/longlogosmall.png'


class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <img src={img} alt="priority1"/>
                </div>
                <nav>
                    <a href="#">Services</a>
                    <a href="#">Why PriorityOne</a>
                    <a href="#">Industries Served</a>
                    <a href="#">Location</a>
                    <a href="#">Contact Us</a>
                </nav>
            </header>
        )
    }
}

export default Header;