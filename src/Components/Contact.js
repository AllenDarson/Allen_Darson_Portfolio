import "../Css/Contact.css";

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa6";
import React, { useState } from 'react';


import Swal from 'sweetalert2'; // 👈 Import SweetAlert2

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        comments: '',
    });
    // Removed [loading, setLoading] since backend API calls are removed

    // FIX: Robust handleChange function for camelCase state keys
    const handleChange = (e) => {
        const formId = e.target.id;
        let key = formId.replace('form', '');
        key = key.charAt(0).toLowerCase() + key.slice(1);
        setFormData({ ...formData, [key]: e.target.value });
    };

    // 🚀 UPDATED: Removed all backend API call logic
    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Basic Client-Side Validation (Required Fields)
        if (!formData.firstName || !formData.email || !formData.comments) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Information',
                text: 'Please fill in the First Name, Email Address, and Comments fields.',
            });
            return;
        }

        // 2. Simulate Success (since the backend call is removed)
        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Thank you for reaching out. (Backend submission bypassed for demonstration/static purposes.)',
            showConfirmButton: false,
            timer: 3000
        });
        
        // 3. Clear the form
        setFormData({ 
            firstName: '',
            lastName: '',
            email: '',
            telephone: '',
            comments: '',
        });
    };
    
    // The visual JSX structure remains the same
    return (
        <section id="contact-section" className="py-5">
            <Container>
                
                <div className="text-center mb-5 justify-content-center">
                    <h1 className="display-4 fw-bold">Connect With Us</h1>
                    <h5 className="text-center fw-normal fst-italic mb-4">Feel free to reach out for new projects, ideas, or collaborations.</h5>
                    <div className="underline mx-auto mb-4"></div>
                    
                </div>

                <Row className="justify-content-center">
                    {/* 1. Contact Form (Left Side) */}
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <div className="p-4 contact-form-box">
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formFirstName">
                                            <Form.Control
                                                type="text"
                                                placeholder="First Name"
                                                className="text-white border-0 contact-input"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formLastName">
                                            <Form.Control
                                                type="text"
                                                placeholder="Last Name"
                                                className="text-white border-0 contact-input"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formEmail">
                                            <Form.Control
                                                type="email"
                                                placeholder="Email Address"
                                                className="text-white border-0 contact-input"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formTelephone">
                                            <Form.Control
                                                type="tel"
                                                placeholder="Telephone (Optional)"
                                                className="text-white border-0 contact-input"
                                                value={formData.telephone}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-4" controlId="formComments">
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Comments / Questions"
                                        className="text-white border-0 contact-input"
                                        value={formData.comments}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                {/* Send Message Button */}
                                <div className="d-grid">
                                    <Button
                                        type="submit"
                                        className="contact-submit-btn"
                                        style={{ "--clr": "rgb(13, 202, 240)" }}
                                        
                                    >
                                        <span className="contact-submit-btn__text">
                                            Send Message
                                        </span>
                                        <span className="contact-submit-btn__icon-wrapper">
                                            {/* Arrow icon SVG */}
                                           <svg
                                                viewBox="0 0 14 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="contact-submit-btn__icon-svg"
                                                width="10"
                                            >
                                                <path
                                                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        </span>
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    {/* 2. Contact Details & Social Media (Right Side) */}
                    <Col lg={4}>
                        <div className="p-4 contact-info-box" data-aos="fade-left">
                            <div className="d-flex align-items-start mb-4">
                                <FaPhone size={24} className="text-info me-3 mt-1" />
                                <div><h6 className="mb-0 fw-bold">Phone</h6><p className="mb-0 text-white-50 txt">+91-8760961525</p></div>
                            </div>
                            <div className="d-flex align-items-start mb-4">
                                <FaEnvelope size={24} className="text-info me-3 mt-1" />
                                <div><h6 className="mb-0 fw-bold">Email</h6><p className="mb-0 text-white-50 txt">allendarson27@gmail.com</p></div>
                            </div>
                            <div className="d-flex align-items-start mb-4">
                                <FaMapMarkerAlt size={24} className="text-info me-3 mt-1" />
                                <div><h6 className="mb-0 fw-bold">Address</h6><p className="mb-0 text-white-50 txt">No.69 Lalbahadur Nagar Masakalipalaiyam road, Peelamedu, Coimbatore - 641004</p></div>
                            </div>
                            <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
                            <h6 className="mb-3 fw-bold">Follow us</h6>
                            <div className="d-flex social-icons">
                                <a href="#facebook" className="social-icons"><FaFacebookF size={18} /></a>
                                <a href="https://wa.me/+918760961525" className="social-icons"><FaWhatsapp size={18} /></a>
                                <a href="https://www.linkedin.com/in/allen-darson-c-53b6b4217" className="social-icons"><FaLinkedinIn size={18} /></a>
                                <a href="https://github.com/AllenDarson" className="social-icons"><FaGithub size={18} /></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;