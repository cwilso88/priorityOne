import React from 'react' 
import helpdesk_woman_2 from '../logos/helpdesk_woman_2.jpeg'
import business_meeting from '../logos/business_meeting.jpeg'

class Services extends React.Component {
    render() {
        return(
            <section id="services">
                <div className="services_top_section row">
                    <div className="services_top_text column">
                        <h1>What are help desk services?</h1>
                        <br />
                        <p>Help desk services are provided by a managed service provider’s (MSP) network operations center (NOC). MSPs can have multiple NOCs running multiple shifts to provide round the clock support. As client issues are reported to the NOC, issues are assigned to the appropriate level of technician. Each technician can track and monitor multiple issues with a closed feedback loop to the client.</p>
                        <br />
                        <p>NOC technicians will also monitor client environments for uptime performance, and proactively resolve issues before the client is even aware. Ongoing updates of antivirus, malware, antispam, device firmware, and OS are performed to eliminate service and security issues.</p>
                    </div>
                    <div className="services_top_image column">
                        <img src={helpdesk_woman_2} alt="business woman" />
                    </div>
                </div>
                    <div className="services_bottom_section row">
                        <div className="services_bottom_image column">
                            <img src={business_meeting} alt="business meeting" />
                        </div>
                        <div className="services_top_text column">
                            <h1>Dedicate Staff to Revenue-generating Activity</h1>
                            <br />
                            <p>Business executives at growing organizations frequently find that as their business grows, their information technology staff has less time to support critical business initiatives. When the number of users increases, the IT team becomes stretched to the limit. By outsourcing your end-user help desk, your IT staff can more readily concentrate on revenue-supporting activities.</p>
                        </div>
                    </div>
            </section>
        )
    }
}

export default Services;