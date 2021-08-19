import React from 'react'
import line_600px from '../logos/line_600px.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faSmile, faThumbsUp } from '@fortawesome/free-regular-svg-icons'


class Benefits extends React.Component {
    render() {
        return(
            <section id="benefits">
                <div className="benefits_title">
                    <h1>Benefits</h1>
                    <img src={line_600px} alt="Gold underline" />
                    <p>When you outsource your IT help desk services to Priority One, you gain these benefits:</p>
                </div>
                <br />
                <div className="benefits_list benefits_row">
                    <div className="benefits_item benefits_column benefits_item_row">
                        <div className="benefits_item_column">
                            <FontAwesomeIcon className="icon" icon={ faChartLine } />
                        </div>
                        <div className="benefits_item_column">
                            <h3>Greater Efficiency</h3>
                            <p>When your internal IT staff can focus on the business initiatives that drive increased revenue, instead of user issues, your organization becomes more efficient.</p>
                        </div>
                    </div>
                    <div className="benefits_item benefits_column benefits_item_row">
                        <div className="benefits_item_column">
                            <FontAwesomeIcon className="icon" icon={ faSmile } />
                        </div>
                        <div className="benefits_item_column">
                            <h3>Satisfied Users</h3>
                            <p>When your internal IT staff can focus on the business initiatives that drive increased revenue, instead of user issues, your organization becomes more efficient.</p>
                        </div>
                    </div>
                    <div className="benefits_item benefits_column benefits_item_row">
                        <div className="benefits_item_column">
                            <FontAwesomeIcon className="icon" icon={ faThumbsUp } />
                        </div>
                        <div className="benefits_item_column">
                            <h3>Happier IT Staff</h3>
                            <p>When your internal IT staff can focus on the business initiatives that drive increased revenue, instead of user issues, your organization becomes more efficient.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Benefits;