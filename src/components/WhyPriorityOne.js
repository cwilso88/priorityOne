import React from 'react'
import helpdesk_woman from '../logos/helpdesk_woman.jpg'
import line_600px from '../logos/line_600px.png'

class WhyPriorityOne extends React.Component {
    render() {
        return(
            <section id="whypriorityone">
                <div className="whypriorityone_container row">
                    <div className="whypriorityone_text column_text">
                        <h1>Why should you use Priority One's help desk services?</h1>
                        <img src={line_600px} alt="Gold underline" />
                        <br />
                        <p>At Corserva, we understand how critical the efficient use of your IT systems is to your day-to-day operations. We pride ourselves on providing clients with always available, best-in-class IT support services. Our continuous service ensures that your critical IT systems and applications are always up and running and that any problems are resolved quickly and accurately by helpful, knowledgeable technicians. Corserva uses ITIL based, industry best practices to enable your users to work efficiently and effectively.</p>
                        <br />
                        <p>With Corserva’s remote IT monitoring services, our US-based service desk support team members resolve many issues before users are even aware of the risk. During client onboarding, Corserva installs a secure software agent on each device that will continuously monitor the device, including uptime, performance, and updates. From our network operations centers, we proactively resolve users’ issues to reduce the potential impact on your business.</p>
                        <br />
                        <p>With Corserva’s US-based 24×7×365 help desk as a service, you gain responsive user support and reporting from a professional team of trained service desk specialists. We operate two 24×7×365 help desk centers from Trumbull, Connecticut, and Orlando, Florida.</p>
                    </div>
                    <div className="whypriorityone_image column_image">
                        <img src={helpdesk_woman} alt="business professional" />
                    </div>
                </div>
            </section>
        )
    }
}

export default WhyPriorityOne;