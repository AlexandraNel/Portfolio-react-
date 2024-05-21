
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {useState} from 'react'; 
import "../index.css";

function ContactPage() {

    const [formData, setFormData]= useState({
        name:'',
        email:'',
        message:'',
    })

    // manages the input 
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData ({ ...formData, [name]: value});
    };
// dont have anywhere to send email
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Container className="contact-form-container mb-5">
          <Row className="mt-5">
            <Col>
              <h2>Contact Us</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
    
                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
    
                <Form.Group controlId="formMessage" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
    
                <Button type="submit" className="mt-4 button">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      );
    }

export default ContactPage