import React from 'react'
import line_1000px from '../logos/line_1000px.png'

class WhyGetHelp extends React.Component {
    render() {
        return(
            <section id="why_get_help">
                <div className="why_get_help_header">
                    <h1>Focus on Business Issues Instead of User Issues</h1>
                    <img src={line_1000px} alt="Gold underline" />

                    <p>
                    Help desk services can be beneficial to companies of all sizes. Companies that have their own internal IT staff can use help desk services to outsource support for the solving of end-user issues, which are typically repetitive with a limited need for advanced technical expertise.
                    </p>
                </div>

                <br />
                <br />


                <div className="why_get_help_checklist">
                    <h2>Do you face any of these challenges?</h2>
                    <br />

                    <div className="why_get_help_checklist_container row">
                        <ul className="column">
                            <li><i class="far fa-check-circle"></i>Does your IT staff get bogged down fixing employee issues?</li>
                            <li><i class="far fa-check-circle"></i>Are members of your IT staff pulled off important company initiatives to deal with user complaints?</li>
                            <li><i class="far fa-check-circle"></i>Are your users dissatisfied with response times from the IT team?</li>
                        </ul>
                        <ul className="column">
                            <li><i class="far fa-check-circle"></i>Are your IT costs escalating?</li>
                            <li><i class="far fa-check-circle"></i>Is your IT staff stretched too thin?</li>
                            <li><i class="far fa-check-circle"></i>Are outages and slow networks hampering your employee’s productivity?</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default WhyGetHelp;