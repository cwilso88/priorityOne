import React from 'react'
import ReactDom from 'react-dom'
import diamond_frame from '../../src/logos/diamond_frame.png'

class EndUserSupport extends React.Component {
    render() {
        return (
            <section>
                <header>
                    <img src={diamond_frame} alt="diamond frame" />
                </header>
            </section>
        )
    }

}

export default EndUserSupport;