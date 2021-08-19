import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'


class ContactUs extends React.Component {
    render() {
        return(
            <Container>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                    </Form.Group>
                </Form>
            </Container>
        )
    }

    export default ContactUs;
}