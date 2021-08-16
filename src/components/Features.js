import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Features extends React.Component {
    render() {
        return(
            <section id="features">
                <div className="features_title">
                    <h1>Features</h1>
                    <p>Features of Corserva’s IT help desk support services include:</p>
                </div>
                <div div className="row">
                    <div className="features_checklist column">
                        <ul>
                            <li><FontAwesomeIcon icon="fa-regular fa-circle-check" />Incident and service request management while applying proper classification and prioritization codes</li>
                            <li><FontAwesomeIcon icon="fa-regular fa-circle-check" />Support for desktops, laptops, mobile devices, servers, storage, network devices and more</li>
                            <li><FontAwesomeIcon icon="fa-regular fa-circle-check" />Support for Windows, Mac, and Linux operating systems</li>
                            <li><FontAwesomeIcon icon="fa-regular fa-circle-check" />Service asset and configuration management, knowledge management and change management</li>
                            <li><FontAwesomeIcon icon="fa-regular fa-circle-check" />Guaranteed service levels via SLAs</li>
                        </ul>
                    </div>

                    <div className="features_image column">
                        <img src="" alt="professional man" />
                    </div>
                </div> 


                <div className="row">
                    <div className="features_image column">
                        <img src="" alt="professional man" />
                    </div>

                    <div className="features_checklist column">
                        <ul>
                            <li><FontAwesomeIcon icon="fa-regular fa-circle-check" />Incident and service request management while applying proper classification and prioritization codes</li>
                            <li><FontAwesomeIcon icon="fa-regular fa-circle-check" />Support for desktops, laptops, mobile devices, servers, storage, network devices and more</li>
                            <li><FontAwesomeIcon icon="fa-regular fa-circle-check" />Support for Windows, Mac, and Linux operating systems</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Features;