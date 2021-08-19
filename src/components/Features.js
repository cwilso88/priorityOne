import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import helpdesk_guy from '../logos/helpdesk_guy.jpg'
import ITteam from '../logos/ITteam.jpg'

class Features extends React.Component {
    render() {
        return(
            <section id="features">
                <div className="features_title">
                    <h1>Features</h1>
                    <p>Features of Priority One’s IT help desk support services include:</p>
                </div>
                <div div className="row">
                    <div className="features_checklist column">
                        <ul>
                            <li><FontAwesomeIcon className="icon" icon={ faCheckCircle } />Incident and service request management while applying proper classification and prioritization codes</li>
                            <li><FontAwesomeIcon className="icon" icon={ faCheckCircle } />Support for desktops, laptops, mobile devices, servers, storage, network devices and more</li>
                            <li><FontAwesomeIcon className="icon" icon={ faCheckCircle } />Support for Windows, Mac, and Linux operating systems</li>
                            <li><FontAwesomeIcon className="icon" icon={ faCheckCircle } />Service asset and configuration management, knowledge management and change management</li>
                            <li><FontAwesomeIcon className="icon" icon={ faCheckCircle } />Guaranteed service levels via SLAs</li>
                        </ul>
                    </div>

                    <div className="features_image column">
                        <img src={helpdesk_guy} alt="professional man" />
                    </div>
                </div> 


                <div className="row">
                    <div className="features_image column">
                        <img src={ITteam} alt="professional man" />
                    </div>

                    <div className="features_checklist column">
                        <ul>
                            <li><FontAwesomeIcon className="icon" icon={ faCheckCircle } />Incident and service request management while applying proper classification and prioritization codes</li>
                            <li><FontAwesomeIcon className="icon" icon={ faCheckCircle } />Support for desktops, laptops, mobile devices, servers, storage, network devices and more</li>
                            <li><FontAwesomeIcon className="icon" icon={ faCheckCircle } />Support for Windows, Mac, and Linux operating systems</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Features;