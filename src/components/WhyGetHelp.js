import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import line_1000px from '../logos/line_1000px.png'



class WhyGetHelp extends React.Component {
    render() {
        return(
            <section id="whygethelp">
                <div className="whygethelp_header">
                    <h1 className="whygethelp_title">Focus on Business Issues Instead of User Issues</h1>
                    <img src={line_1000px} alt="Gold underline" />

                    <p>
                    Help desk services can be beneficial to companies of all sizes. Companies that have their own internal IT staff can use help desk services to outsource support for the solving of end-user issues, which are typically repetitive with a limited need for advanced technical expertise.
                    </p>
                </div>

                <br />
                <br />


                <div className="whygethelp_checklist">
                    <h2 className="whygethelp_title">Do you face any of these challenges?</h2>
                    <br />
                    
                    <div className="whygethelp_checklist_container row">
                        <ul className="column">
                            <li><FontAwesomeIcon className="icon" icon={ faCheckCircle } />Does your IT staff get bogged down fixing employee issues?</li>
                            <li><FontAwesomeIcon className="icon" icon={ faCheckCircle } />Are members of your IT staff pulled off important company initiatives to deal with user complaints?</li>
                            <li><FontAwesomeIcon className="icon" icon={ faCheckCircle } />Are your users dissatisfied with response times from the IT team?</li>
                        </ul>
                        <ul className="column">
                            <li><FontAwesomeIcon className="icon" icon={ faCheckCircle } />Are your IT costs escalating?</li>
                            <li><FontAwesomeIcon className="icon" icon={ faCheckCircle } />Is your IT staff stretched too thin?</li>
                            <li><FontAwesomeIcon className="icon" icon={ faCheckCircle } />Are outages and slow networks hampering your employee’s productivity?</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default WhyGetHelp;