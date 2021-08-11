import React from 'react'
import ReactDom from 'react-dom'

class Servicesbar extends React.Component{
    render() {
        return (
            <div id="servicesbar" className="container-box">
                <ul className="nav-list">
                    <li>
                        <a href="">End-User Support</a>
                    </li>
                    <li>
                        <a href="">Help & Service Desk</a>
                    </li>
                    <li>
                        <a href="">Managed User</a>
                    </li>
                    <li>
                        <a href="">Application Support</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Servicesbar;