import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

class ContactUs extends React.Component {
    render() {
        return(
            <Container id="contactus" className="row">
                <article className="column">
                    <h1>Get in Touch</h1>
                    <p>We are here to answer any questions you might have about our enterprise technology solutions and managed IT services.</p>
                    <p>Submit this form and let us know the best way to reach you, or contact us directly below.</p>
                </article>
                <Form className="column">
                    <Form.Group controlId="form.Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group controlId="form.Email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="form.Textarea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={10} />
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

export default ContactUs;