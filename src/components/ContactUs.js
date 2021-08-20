import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'


class ContactUs extends React.Component {
    render() {
        return(
            <div id="contactus">
                <div className="form_row">
                    <article className="form_column">
                        <h1>Get in Touch</h1>
                        <p>We are here to answer any questions you might have about our enterprise technology solutions and managed IT services.</p>
                        <p>Submit this form and let us know the best way to reach you, or contact us directly below.</p>
                    </article>
                    <Form className="form_column">
                        <Form.Group className="form_group" controlId="form.Name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" />
                        </Form.Group>
                        <Form.Group className="form_group" controlId="form.Name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" />
                        </Form.Group>
                        <Form.Group className="form_group" controlId="form.Name">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Company Name" />
                        </Form.Group>
                        <Form.Group className="form_group" controlId="form.Email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="form_group" controlId="form.Textarea">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={7} />
                        </Form.Group>
                        <Button type="submit" className="submit_button">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default ContactUs;